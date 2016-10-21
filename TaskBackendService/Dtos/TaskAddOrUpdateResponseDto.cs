namespace TaskBackendService.Dtos
{
    public class TaskAddOrUpdateResponseDto: TaskDto
    {
        public TaskAddOrUpdateResponseDto(Models.Task entity)
        :base(entity)
        {

        }
    }
}
