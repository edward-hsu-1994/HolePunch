using HolePunch.Domain;
using HolePunch.Proxies;
using HolePunch.Services;

using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

using ef = HolePunch.Accesses.Repositories;
using HolePunch.Accesses.Proxies;
using Firewall;

namespace HolePunch.Accesses.Domain
{
    public class ProxyServer : IProxyService
    {
        private readonly ef.HolePunchContext _context;
        private readonly IProxyServerHub _proxyServerHub;
        private static ConcurrentDictionary<int, Guid> _serverIdMap;
        public ProxyServer(ef.HolePunchContext context, IProxyServerHub proxyServerHub)
        {
            _context = context;
            _proxyServerHub = proxyServerHub;
            _serverIdMap = new ConcurrentDictionary<int, Guid>();
        }

        private async Task<Guid?> GetProxyServerId(int serviceId)
        {
            if (_serverIdMap.TryGetValue(serviceId, out Guid serverId))
            {
                return serverId;
            }
            return null;
        }

        public async Task<IEnumerable<Service>> ListService()
        {
            var services = await _context.Service.Select(ef.Service.GetToDomainExpression()).ToArrayAsync();

            foreach (var server in services)
            {
                if (_serverIdMap.TryGetValue(server.Id, out Guid serverId))
                {
                    var proxyServer = await _proxyServerHub.GetProxyServer(serverId);
                    server.RealPort = proxyServer.ListenPort;
                    server.Status = proxyServer.Status;
                }
            }

            return services;
        }

        public async Task<Service> GetService(int serviceId)
        {
            var server = await _context.Service.Where(x => x.Id == serviceId).Select(ef.Service.GetToDomainExpression()).SingleOrDefaultAsync();

            if (_serverIdMap.TryGetValue(server.Id, out Guid serverId))
            {
                var proxyServer = await _proxyServerHub.GetProxyServer(serverId);
                server.RealPort = proxyServer.ListenPort;
                server.Status = proxyServer.Status;
            }

            return server;
        }

        public async Task<Service> CreateService(Service service)
        {
            var instance = ef.Service.FromDomain(service);
            _context.Service.Add(instance);
            await _context.SaveChangesAsync();
            var result = await GetService(instance.Id);

            await StartProxyServer(result);
            return result;
        }

        public async Task<Service> UpdateService(Service service)
        {
            var instance = await _context.Service.SingleOrDefaultAsync(x => x.Id == service.Id);
            instance.Name = service.Name;
            instance.Port = service.Port;
            instance.Protocol = service.Protocol;
            instance.LogoUrl = service.LogoUrl;
            await _context.SaveChangesAsync();

            await RestartProxyServer(service);

            return await GetService(service.Id);
        }

        public async Task DeleteService(int serviceId)
        {
            var service = await GetService(serviceId);
            // remove all allow rules
            foreach (var ruleId in (await ListServiceAllowRule(serviceId)).Select(x => x.Id))
            {
                await DeleteServiceAllowRule(ruleId, true);
            }

            // remove all targets 
            foreach (var targetId in (await ListServiceForwardTarget(serviceId)).Select(x => x.Id))
            {
                await DeleteServiceForwardTarget(targetId, true);
            }

            _context.RemoveRange(_context.Service.Where(x => x.Id == serviceId));
            await _context.SaveChangesAsync();

            await StopProxyServer(service);
        }


        #region Server Manage
        private async Task StartProxyServer(Service service)
        {
            var serverId = await GetProxyServerId(service.Id);
            if (serverId.HasValue)
            {
                return;
            }

            var targets = await ListServiceForwardTarget(service.Id);
            if (targets.Count() > 1)
            {
                throw new NotImplementedException();
            }

            if (!targets.Any())
            {
                return;
            }

            var target = targets.First();

            IProxyServer proxyServer;
            switch (service.Protocol)
            {
                case ServiceProtocols.TCP:
                    proxyServer = new FirewallTcpProxyServer(IPEndPoint.Parse(target.IPAddress + ":" + target.Port), target.Port);
                    break;
                default:
                    throw new NotImplementedException();
                    break;
            }

            _serverIdMap[service.Id] = proxyServer.Id;

            if (proxyServer is FirewallTcpProxyServer fwProxyServer)
            {
                var rules = await ListServiceAllowRule(service.Id);
                await fwProxyServer.UpdateAllowCidrList(await GetServiceAllowRuleCIDRNotation(service.Id, target.Id));
            }

            await _proxyServerHub.AddProxyServer(proxyServer);
        }

        private async Task RestartProxyServer(Service service)
        {
            await StopProxyServer(service);
            await StartProxyServer(service);
        }

        private async Task StopProxyServer(Service service)
        {
            var serverId = await GetProxyServerId(service.Id);

            if (!serverId.HasValue)
            {
                return;
            }

            await _proxyServerHub.RemoveProxyServer(serverId.Value);
        }
        #endregion


        public async Task<IEnumerable<ServiceForwardTarget>> ListServiceForwardTarget(int serviceId)
        {
            return await _context.ServiceForwardTarget.Where(x => x.ServiceId == serviceId).Select(ef.ServiceForwardTarget.GetToDomainExpression()).ToArrayAsync();
        }
        public Task<ServiceForwardTarget> GetServiceForwardTarget(int serviceForwardTargetId)
        {
            return _context.ServiceForwardTarget.Where(x => x.Id == serviceForwardTargetId).Select(ef.ServiceForwardTarget.GetToDomainExpression()).SingleOrDefaultAsync();
        }
        public async Task<ServiceForwardTarget> CreateServiceForwardTarget(ServiceForwardTarget serviceForwardTarget)
        {
            if (_context.ServiceForwardTarget.Where(x => x.ServiceId == serviceForwardTarget.ServiceId).Count() > 0)
            {
                throw new NotImplementedException();
            }

            var instance = ef.ServiceForwardTarget.FromDomain(serviceForwardTarget);
            _context.ServiceForwardTarget.Add(instance);
            await _context.SaveChangesAsync();

            await RestartProxyServer(await GetService(instance.ServiceId));

            return instance.ToDomain();
        }
        public async Task<ServiceForwardTarget> UpdateServiceForwardTarget(ServiceForwardTarget serviceForwardTarget)
        {
            var instance = await _context.ServiceForwardTarget.SingleOrDefaultAsync(x => x.Id == serviceForwardTarget.Id);
            instance.Name = serviceForwardTarget.Name;
            instance.Priority = serviceForwardTarget.Priority;
            instance.ServiceId = serviceForwardTarget.ServiceId;
            instance.IpAddress = serviceForwardTarget.IPAddress;
            instance.Port = serviceForwardTarget.Port;
            await _context.SaveChangesAsync();

            await RestartProxyServer(await GetService(instance.ServiceId));

            return instance.ToDomain();
        }
        public async Task DeleteServiceForwardTarget(int serviceForwardTargetId, bool passServerOperator = false)
        {
            var serviceForwardTarget = await GetServiceForwardTarget(serviceForwardTargetId);
            _context.RemoveRange(_context.ServiceForwardTarget.Where(x => x.Id == serviceForwardTargetId));
            await _context.SaveChangesAsync();

            if (!passServerOperator)
            {
                await RestartProxyServer(await GetService(serviceForwardTarget.ServiceId));
            }
        }


        private Task<IEnumerable<CIDRNotation>> GetServiceAllowRuleCIDRNotation(int serviceId, int? serviceForwardTargetId = null)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ServiceAllowRule>> ListServiceAllowRule(int serviceId, int? serviceForwardTargetId = null)
        {
            throw new NotImplementedException();
        }
        public Task<ServiceAllowRule> GetServiceAllowRule(int serviceAllowRuleId)
        {
            throw new NotImplementedException();
        }
        public Task<ServiceAllowRule> CreateServiceAllowRule(ServiceAllowRule serviceAllowRule)
        {
            throw new NotImplementedException();
        }
        public Task<ServiceAllowRule> UpdateServiceAllowRule(ServiceAllowRule serviceAllowRule)
        {
            throw new NotImplementedException();
        }
        public Task DeleteServiceAllowRule(int serviceAllowRuleId, bool passServerOperator = false)
        {
            throw new NotImplementedException();
        }


        public Task InitialCurrentServices()
        {
            throw new NotImplementedException();
        }
    }
}
