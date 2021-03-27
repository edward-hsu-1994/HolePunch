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

            await UpdateProxyServer(service);

            return await GetService(service.Id);
        }

        public async Task DeleteService(int serviceId)
        {
            var service = await GetService(serviceId);
            // remove all allow rules
            foreach (var ruleId in (await ListServiceAllowRule(serviceId)).Select(x => x.Id))
            {
                await DeleteServiceAllowRule(ruleId);
            }

            // remove all targets 
            foreach (var targetId in (await ListServiceForwardTarget(serviceId)).Select(x => x.Id))
            {
                await DeleteServiceForwardTarget(targetId);
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
                    proxyServer = new TcpProxyServer(IPEndPoint.Parse(target.IPAddress + ":" + target.Port), target.Port);
                    break;
                default:
                    throw new NotImplementedException();
                    break;
            }

            _serverIdMap[service.Id] = proxyServer.Id;
            await _proxyServerHub.AddProxyServer(proxyServer);
        }

        private async Task UpdateProxyServer(Service service)
        {
            var serverId = await GetProxyServerId(service.Id);

            if (service.Enabled && !serverId.HasValue)
            {
                // will start
                await StartProxyServer(service);
            }
            else if (!service.Enabled && serverId.HasValue)
            {
                // will stop
                await _proxyServerHub.RemoveProxyServer(serverId.Value);
            }
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

        public Task<IEnumerable<ServiceForwardTarget>> ListServiceForwardTarget(int serviceId)
        {
            throw new NotImplementedException();
        }
        public Task<ServiceForwardTarget> GetServiceForwardTarget(int serviceForwardTargetId)
        {
            throw new NotImplementedException();
        }
        public Task<ServiceForwardTarget> CreateServiceForwardTarget(ServiceForwardTarget serviceForwardTarget)
        {
            throw new NotImplementedException();
        }
        public Task<ServiceForwardTarget> UpdateServiceForwardTarget(ServiceForwardTarget serviceForwardTarget)
        {
            throw new NotImplementedException();
        }
        public Task DeleteServiceForwardTarget(int serviceForwardTargetId)
        {
            throw new NotImplementedException();
        }


        public Task<IEnumerable<ServiceAllowRule>> ListServiceAllowRule(int serviceId)
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
        public Task DeleteServiceAllowRule(int serviceAllowRuleId)
        {
            throw new NotImplementedException();
        }


        public Task InitialCurrentServices()
        {
            throw new NotImplementedException();
        }
    }
}
