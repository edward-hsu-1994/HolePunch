using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

using XPY.ToolKit.Utilities.Cryptography;

namespace HolePunch.Shared
{
    public static class JwtDependencyInjectionExtension
    {
        public static void AddJwt(
            this IServiceCollection serviceCollection,
            string issuer,
            string audience,
            string secureKey
            )
        {
            serviceCollection.AddAuthentication(options =>
            {
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.IncludeErrorDetails = true;
                options.SaveToken = true;

                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    IssuerSigningKey = new SymmetricSecurityKey(secureKey.ToHash<SHA512>()),
                    ValidIssuer = issuer, // 驗證的發行者
                    ValidAudience = audience, // 驗證的TOKEN接受者

                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true, // 檢查TOKEN發行者
                    ValidateAudience = true, // 檢查該TOKEN是否發給本服務
                    ValidateLifetime = true, // 檢查TOKEN是否有效
#if (DEBUG)
                    ClockSkew = TimeSpan.FromSeconds(10) // 時間容錯設為10秒誤差
#endif
                };
            });
        }
    }
}
