using HolePunch.Domain;
using HolePunch.Proxies;
using HolePunch.Services;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolePunch.Web.Controllers
{
    [Authorize(Policy = "Admin")]
    [ApiController]
    [Route("[controller]")]
    public class ServiceController : ControllerBase
    {
        private readonly ILogger<ServiceController> _logger;
        private readonly IProxyService _proxyService;

        public ServiceController(ILogger<ServiceController> logger, IProxyService proxyService)
        {
            _logger = logger;
            _proxyService = proxyService;
        }

        [HttpGet]
        public Task<IEnumerable<Service>> ListService()
        {
            return _proxyService.ListService();
        }

        [HttpGet("{serviceId}")]
        public Task<Service> GetService(int serviceId)
        {
            return _proxyService.GetService(serviceId);
        }

        [HttpPost]
        public Task<Service> CreateService([FromBody] Service service)
        {
            return _proxyService.CreateService(service);
        }

        [HttpPut]
        public Task<Service> UpdateService([FromBody] Service service)
        {
            return _proxyService.UpdateService(service);
        }

        [HttpDelete("{serviceId}")]
        public Task DeleteService(int serviceId)
        {
            return _proxyService.DeleteService(serviceId);
        }

        #region AllowRules
        [HttpGet("{serviceId}/allowRules")]
        public Task<IEnumerable<ServiceAllowRule>> ListServiceAllowRule(int serviceId)
        {
            return _proxyService.ListServiceAllowRule(serviceId);
        }

        [HttpGet("{serviceId}/allowRules/{allowRuleId}")]
        public Task<ServiceAllowRule> GetServiceAllowRule(int serviceId, int allowRuleId)
        {
            return _proxyService.GetServiceAllowRule(allowRuleId);
        }

        [HttpPost("{serviceId}/allowRules")]
        public Task<ServiceAllowRule> CreateServiceAllowRule(int serviceId, [FromBody] ServiceAllowRule allowRule)
        {
            return _proxyService.CreateServiceAllowRule(allowRule);
        }

        [HttpPut("{serviceId}/allowRules")]
        public Task<ServiceAllowRule> UpdateServiceAllowRule(int serviceId, [FromBody] ServiceAllowRule allowRule)
        {
            return _proxyService.UpdateServiceAllowRule(allowRule);
        }

        [HttpDelete("{serviceId}/allowRules/{allowRuleId}")]
        public Task DeleteServiceAllowRule(int serviceId, int allowRuleId)
        {
            return _proxyService.DeleteServiceAllowRule(allowRuleId);
        }
        #endregion

        #region Targets
        [HttpGet("{serviceId}/forwardTarget")]
        public Task<IEnumerable<ServiceForwardTarget>> ListServiceForwardTarget(int serviceId)
        {
            return _proxyService.ListServiceForwardTarget(serviceId);
        }

        [HttpGet("{serviceId}/forwardTarget/{forwardTargetId}")]
        public Task<ServiceForwardTarget> GetServiceForwardTarget(int serviceId, int forwardTarget)
        {
            return _proxyService.GetServiceForwardTarget(forwardTarget);
        }

        [HttpPost("{serviceId}/forwardTarget")]
        public Task<ServiceForwardTarget> CreateServiceForwardTarget(int serviceId, [FromBody] ServiceForwardTarget forwardTarget)
        {
            return _proxyService.CreateServiceForwardTarget(forwardTarget);
        }

        [HttpPut("{serviceId}/forwardTarget")]
        public Task<ServiceForwardTarget> UpdateServiceForwardTarget(int serviceId, [FromBody] ServiceForwardTarget forwardTarget)
        {
            return _proxyService.UpdateServiceForwardTarget(forwardTarget);
        }

        [HttpDelete("{serviceId}/forwardTarget/{forwardTargetId}")]
        public Task DeleteServiceForwardTarget(int serviceId, int allowRuleId)
        {
            return _proxyService.DeleteServiceForwardTarget(allowRuleId);
        }
        #endregion
    }
}
