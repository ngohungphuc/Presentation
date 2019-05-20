using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoogleDriveClone.Models
{
    public class Media: BaseEntity
    {
        public string Name { get; set; }
        public string Path { get; set; }
        public MediaType Type { get; set; }
        public bool IsDeleted { get; set; }
    }
}
