namespace TaskBackendService.Dtos
{
    public class TaskDto
    {
        public TaskDto()
        {

        }

        public TaskDto(Models.Task entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
