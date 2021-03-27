using HolePunch.Domain;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Services
{
    public interface IProxyService
    {
        Task InitialCurrentServices();

        Task<IEnumerable<Service>> ListService();
        Task<Service> GetService(int serviceId);
        Task<Service> CreateService(Service service);
        Task<Service> UpdateService(Service service);
        Task DeleteService(int serviceId);

        Task<IEnumerable<ServiceForwardTarget>> ListServiceForwardTarget(int serviceId);
        Task<ServiceForwardTarget> GetServiceForwardTarget(int serviceForwardTargetId);
        Task<ServiceForwardTarget> CreateServiceForwardTarget(ServiceForwardTarget serviceForwardTarget);
        Task<ServiceForwardTarget> UpdateServiceForwardTarget(ServiceForwardTarget serviceForwardTarget);
        Task DeleteServiceForwardTarget(int serviceForwardTargetId);

        Task<IEnumerable<ServiceAllowRule>> ListServiceRule(int serviceId);
        Task<ServiceAllowRule> GetServiceRule(int serviceAllowRuleId);
        Task<ServiceAllowRule> CreateServiceRule(ServiceAllowRule serviceAllowRule);
        Task<ServiceAllowRule> UpdateServiceRule(ServiceAllowRule serviceAllowRule);
        Task DeleteServiceRule(int serviceAllowRuleId);
    }
}
