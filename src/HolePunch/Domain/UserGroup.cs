using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Domain
{
    public class UserGroup
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsAdmin { get; set; }
    }
}
