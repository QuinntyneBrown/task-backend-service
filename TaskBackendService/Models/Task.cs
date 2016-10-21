using System;
using System.Collections.Generic;

namespace TaskBackendService.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string HtmlDescription { get; set; }
        public DateTime Created { get; set; }
        public DateTime Completed { get; set; }
        public DateTime Deadline { get; set; }
        public int Priority { get; set; }
        public ICollection<TaskSnapShot> TaskSnapShots { get; set; } = new HashSet<TaskSnapShot>();
        public bool IsDeleted { get; set; }
    }
}
