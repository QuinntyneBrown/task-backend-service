using TaskBackendService.Dtos;
using TaskBackendService.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace TaskBackendService.Controllers
{
    [Authorize]
    [RoutePrefix("api/task")]
    public class TaskController : ApiController
    {
        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(TaskAddOrUpdateResponseDto))]
        public IHttpActionResult Add(TaskAddOrUpdateRequestDto dto) { return Ok(_taskService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(TaskAddOrUpdateResponseDto))]
        public IHttpActionResult Update(TaskAddOrUpdateRequestDto dto) { return Ok(_taskService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<TaskDto>))]
        public IHttpActionResult Get() { return Ok(_taskService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(TaskDto))]
        public IHttpActionResult GetById(int id) { return Ok(_taskService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_taskService.Remove(id)); }

        protected readonly ITaskService _taskService;


    }
}
