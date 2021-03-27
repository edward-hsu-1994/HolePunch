using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Domain
{
    public class ServiceAllowRule
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public int? ServiceForwardTargetId { get; set; }
        public string Type { get; set; }


        public int? CidrGroupId { get; set; }
        public string Cidr { get; set; }
        public int? UserGroupId { get; set; }
        public int? UserId { get; set; }
    }
}
