using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Domain
{
    public class CidrGroup
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string[] CidrList { get; set; }
    }
}
