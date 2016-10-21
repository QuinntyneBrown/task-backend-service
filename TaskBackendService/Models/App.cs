using System.Collections.Generic;

namespace TaskBackendService.Models
{
    public class App
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Task> Tasks { get; set; } = new HashSet<Task>();
        public ICollection<User> Users { get; set; } = new HashSet<User>();
        public bool IsDeleted { get; set; }
    }
}
