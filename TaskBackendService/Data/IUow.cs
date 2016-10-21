namespace TaskBackendService.Data
{
    public interface IUow
    {
        IRepository<Models.Task> Tasks { get; }
        void SaveChanges();
    }
}
