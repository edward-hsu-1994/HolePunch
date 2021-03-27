using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Domain
{
    public class ServiceAllowRule
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public int ServiceForwardTargetId { get; set; }
        public ServiceAllowRuleTypes Type { get; set; }
    }

    public class ServiceAllowCidrGroupRule : ServiceAllowRule
    {
        public int CidrGroupId { get; set; }
    }

    public class ServiceAllowCidrRule : ServiceAllowRule
    {
        public string Cidr { get; set; }
    }

    public class ServiceAllowUserGroupRule : ServiceAllowRule
    {
        public int UserGroupId { get; set; }
    }

    public class ServiceAllowUserRule : ServiceAllowRule
    {
        public int UserId { get; set; }
    }
}
