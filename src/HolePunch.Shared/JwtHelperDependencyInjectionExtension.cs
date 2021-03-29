using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Shared
{
    public static class JwtHelperDependencyInjectionExtension
    {
        /// <summary>
        /// 加入JwtHelper
        /// </summary>
        /// <param name="serviceCollection">服務容器</param>
        /// <returns>服務容器</returns>
        public static IServiceCollection AddJwtHelper<TJwtTokenModel>(
            this IServiceCollection serviceCollection,
            string issuer,
            string audience,
            string secureKey,
            Action<JwtOption> configureOptions = null
            )
        {
            if (configureOptions != null)
            {
                serviceCollection.Configure<JwtOption>(configureOptions);
                serviceCollection.AddSingleton<JwtHelper<JwtOption>>();

                return serviceCollection;
            }

            serviceCollection.AddSingleton<JwtHelper<TJwtTokenModel>>(sp =>
            {
                return new JwtHelper<TJwtTokenModel>(Options.Create<JwtOption>(new JwtOption()
                {
                    Issuer = issuer,
                    Audience = audience,
                    SecureKey = secureKey,
                }));
            });

            serviceCollection.AddJwt(issuer, audience, secureKey);

            return serviceCollection;
        }
    }
}
