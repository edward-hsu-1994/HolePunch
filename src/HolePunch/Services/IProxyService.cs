using HolePunch.Domain;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Services
{
    public interface IProxyService
    {
        Task InitialServices();

        Task<IEnumerable<Service>> ListService();
        Task<Service> GetService(int serviceId);
        Task<Service> CreateService(Service service);
        Task<Service> UpdateService(Service service);
        Task DeleteService(int serviceId);

        Task<IEnumerable<ServiceForwardTarget>> ListServiceForwardTarget(int serviceId);
        Task<ServiceForwardTarget> GetServiceForwardTarget(int serviceForwardTargetId);
        Task<ServiceForwardTarget> CreateServiceForwardTarget(ServiceForwardTarget serviceForwardTarget);
        Task<ServiceForwardTarget> UpdateServiceForwardTarget(ServiceForwardTarget serviceForwardTarget);
        Task DeleteServiceForwardTarget(int serviceForwardTargetId, bool passServerOperator = false);

        Task<IEnumerable<ServiceAllowRule>> ListServiceAllowRule(int serviceId, int? serviceForwardTargetId = null);
        Task<ServiceAllowRule> GetServiceAllowRule(int serviceAllowRuleId);
        Task<ServiceAllowRule> CreateServiceAllowRule(ServiceAllowRule serviceAllowRule);
        Task<ServiceAllowRule> UpdateServiceAllowRule(ServiceAllowRule serviceAllowRule);
        Task DeleteServiceAllowRule(int serviceAllowRuleId, bool passServerOperator = false);
        Task<IEnumerable<Service>> ListMyService(int userId);

        Task<IEnumerable<ConnectionInfo>> ListConnections();
    }
}
