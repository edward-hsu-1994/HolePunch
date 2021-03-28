using HolePunch.Domain;
using HolePunch.Proxies;
using HolePunch.Services;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolePunch.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CidrGroupController : ControllerBase
    {
        private readonly ILogger<ServiceController> _logger;
        private readonly ICidrGroupService _cidrGroupService;

        public CidrGroupController(ILogger<ServiceController> logger, ICidrGroupService cidrGroupService)
        {
            _logger = logger;
            _cidrGroupService = cidrGroupService;
        }

        [HttpGet]
        public Task<IEnumerable<CidrGroup>> ListCidrGroup()
        {
            return _cidrGroupService.ListCidrGroup();
        }

        [HttpGet("{cidrGroupId}")]
        public Task<CidrGroup> GetCidrGroup(int cidrGroupId)
        {
            return _cidrGroupService.GetCidrGroup(cidrGroupId);
        }

        [HttpPost]
        public Task<CidrGroup> CreateCidrGroup([FromBody] CidrGroup cidrGroup)
        {
            return _cidrGroupService.CreateCidrGroup(cidrGroup);
        }

        [HttpPut]
        public Task<CidrGroup> UpdateCidrGroup([FromBody] CidrGroup cidrGroup)
        {
            return _cidrGroupService.UpdateCidrGroup(cidrGroup);
        }

        [HttpDelete("{cidrGroupId}")]
        public Task DeleteCidrGroup(int cidrGroup)
        {
            return _cidrGroupService.DeleteCidrGroup(cidrGroup);
        }
    }
}
