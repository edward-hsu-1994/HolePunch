using HolePunch.Domain;
using HolePunch.Services;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ef = HolePunch.Accesses.Repositories;

namespace HolePunch.Accesses.Domain
{
    public class CidrGroupService : ICidrGroupService
    {
        private readonly ef.HolePunchContext _context;
        private readonly IServiceProvider _sp;
        public CidrGroupService(ef.HolePunchContext context, IServiceProvider sp)
        {
            _context = context;
            _sp = sp;
        }

        public async Task<IEnumerable<CidrGroup>> ListCidrGroup()
        {
            return _context.CidrGroup.Select(x => x.ToDomain());
        }

        public Task<CidrGroup> GetCidrGroup(int cidrGroupId)
        {
            return _context.CidrGroup.Where(x => x.Id == cidrGroupId).Select(ef.CidrGroup.GetToDomainExpression()).SingleOrDefaultAsync();
        }

        public async Task<CidrGroup> CreateCidrGroup(CidrGroup cidrGroup)
        {
            var instance = ef.CidrGroup.FromDomain(cidrGroup);
            _context.CidrGroup.Add(instance);
            await _context.SaveChangesAsync();
            return instance.ToDomain();
        }

        public async Task<CidrGroup> UpdateCidrGroup(CidrGroup cidrGroup)
        {
            var instance = await _context.CidrGroup.SingleOrDefaultAsync(x => x.Id == cidrGroup.Id);
            instance.Name = cidrGroup.Name;
            instance.CidrList = cidrGroup.CidrList;
            await _context.SaveChangesAsync();

            await _sp.GetService<ProxyService>().ReflashAllProxyServerAllowRules();

            return instance.ToDomain();
        }

        public async Task DeleteCidrGroup(int cidrGroupId)
        {
            _context.ServiceAllowRule.RemoveRange(_context.ServiceAllowRule.Where(x => x.CidrGroupId == cidrGroupId));
            _context.CidrGroup.RemoveRange(_context.CidrGroup.Where(x => x.Id == cidrGroupId));
            await _context.SaveChangesAsync();

            await _sp.GetService<ProxyService>().ReflashAllProxyServerAllowRules();
        }
    }
}
