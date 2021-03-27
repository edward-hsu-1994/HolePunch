using HolePunch.Domain;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Services
{
    public interface ICidrGroupService
    {
        Task<IEnumerable<CidrGroup>> ListCidrGroup();
        Task<CidrGroup> GetCidrGroup(int cidrGroupId);
        Task<CidrGroup> CreateCidrGroup(CidrGroup cidrGroup);
        Task<CidrGroup> UpdateCidrGroup(CidrGroup cidrGroup);
        Task DeleteCidrGroup(int cidrGroupId);

    }
}
