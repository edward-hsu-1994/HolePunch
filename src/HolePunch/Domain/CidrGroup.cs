using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Domain
{
    public class CidrGroup
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<string> CidrList { get; set; } = new List<string>();
    }
}
