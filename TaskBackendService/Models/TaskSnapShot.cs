using System;

namespace TaskBackendService.Models
{
    public class TaskSnapShot
    {
        public int Id { get; set; }
        public int? TaskId { get; set; }
        public string Name { get; set; }
        public string HtmlDescription { get; set; }
        public DateTime Created { get; set; }
        public DateTime Completed { get; set; }
        public DateTime Deadline { get; set; }
        public int Priority { get; set; }
        public bool IsDeleted { get; set; }

        public Task Task { get; set; }
    }
}
