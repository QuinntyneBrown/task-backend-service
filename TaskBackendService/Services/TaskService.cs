using System;
using System.Collections.Generic;
using TaskBackendService.Dtos;
using TaskBackendService.Data;
using System.Linq;

namespace TaskBackendService.Services
{
    public class TaskService : ITaskService
    {
        public TaskService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.Tasks;
            _cache = cacheProvider.GetCache();
        }

        public TaskAddOrUpdateResponseDto AddOrUpdate(TaskAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.Task());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new TaskAddOrUpdateResponseDto(entity);
        }

        public ICollection<TaskDto> Get()
        {
            ICollection<TaskDto> response = new HashSet<TaskDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new TaskDto(entity)); }
            return response;
        }

        public TaskDto GetById(int id)
        {
            return new TaskDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.Task> _repository;
        protected readonly ICache _cache;
    }
}
