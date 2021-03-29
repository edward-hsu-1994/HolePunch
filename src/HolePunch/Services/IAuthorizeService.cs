using HolePunch.Shared;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Services
{
    public interface IAuthorizeService
    {
        public string GenerateJwt(DefaultJwtTokenModel tokenModel);
        public bool VerifyJwt(string jwt, out DefaultJwtTokenModel tokenModel);
    }
}
