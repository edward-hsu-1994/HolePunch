using HolePunch.Services;
using HolePunch.Shared;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Accesses.Domain
{
    public class AuthorizeService : IAuthorizeService
    {
        private readonly JwtHelper<DefaultJwtTokenModel> _jwtHelper;
        public AuthorizeService(JwtHelper<DefaultJwtTokenModel> jwtHelper)
        {
            _jwtHelper = jwtHelper;
        }
        public string GenerateJwt(DefaultJwtTokenModel tokenModel)
        {
            return "bearer " + _jwtHelper.EncodeJwt(tokenModel);
        }

        public bool VerifyJwt(string jwt, out DefaultJwtTokenModel tokenModel)
        {
            tokenModel = _jwtHelper.DecodeJwt(jwt);
            return tokenModel != null;
        }
    }
}
