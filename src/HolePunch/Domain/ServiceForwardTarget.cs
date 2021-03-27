using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Domain
{
    public class ServiceForwardTarget
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public string Name { get; set; }
        public string IPAddress { get; set; }
        public int Port { get; set; }
        public int Priority { get; set; }
        public bool Enabled { get; set; }
    }
}
