using HolePunch.Accesses;
using HolePunch.Accesses.Domain;
using HolePunch.Accesses.Repositories;
using HolePunch.Proxies;
using HolePunch.Services;
using HolePunch.Shared;
using HolePunch.Web.Hubs;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using NSwag.Generation.Processors.Security;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

using XPY.ToolKit.Utilities.Cryptography;

namespace HolePunch.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IProxyServerHub, TcpProxyServerHub>();
            services.AddScoped<ICidrGroupService, CidrGroupService>();
            services.AddScoped<IProxyService, ProxyService>();
            services.AddScoped<IUserGroupService, UserGroupService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IAuthorizeService, AuthorizeService>();
            services.AddScoped<ProxyService>();

            services.AddDbContext<HolePunchContext>(config =>
            {
                config.UseNpgsql(Configuration["CONN_PG"] ?? Configuration.GetConnectionString("PG"));
            });

            services.AddHttpContextAccessor();
            services.AddOpenApiDocument(config =>
            {
                config.Title = "HolePunch";
                config.Version = $"{ThisAssembly.Git.BaseTag}#{ThisAssembly.Git.Commit}"; ;
                config.DocumentProcessors.Add(new SecurityDefinitionAppender("apiKey", new NSwag.OpenApiSecurityScheme()
                {
                    Type = NSwag.OpenApiSecuritySchemeType.ApiKey,
                    Name = "Authorization",
                    In = NSwag.OpenApiSecurityApiKeyLocation.Header,
                    Description = "JWT(Bearer) 存取權杖"
                }));
                config.OperationProcessors.Add(new OperationSecurityScopeProcessor("apiKey"));
            });

            services.AddSignalR();

            services.AddJwtHelper<DefaultJwtTokenModel>(
                issuer: Configuration["JWT_ISS"] ?? Configuration["JWT:Issuer"],
                audience: Configuration["JWT_AUD"] ?? Configuration["JWT:Audience"],
                secureKey: Configuration["JWT_SEC"] ?? Configuration["JWT:SecureKey"]);

            services.AddControllers().AddJsonOptions(config =>
            {
                config.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
            });

            services.AddAuthorization();

            services.AddSpaStaticFiles(options =>
            {
                options.RootPath = "./wwwroot";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, HolePunchContext context, IProxyService proxyService)
        {
            context.Database.Migrate();
            if (!context.User.Any())
            {
                var user = new User()
                {
                    Account = "admin",
                    Name = "Administrator",
                    Password = "admin@holepunch".ToHashString<SHA1>(false),
                    Enabled = true
                };
                var group = new UserGroup()
                {
                    Name = "Admins",
                    IsAdmin = true
                };
                context.User.Add(user);
                context.UserGroup.Add(group);
                context.SaveChanges();

                context.UserGroupMember.Add(new UserGroupMember()
                {
                    UserGroupId = group.Id,
                    UserId = user.Id
                });
                context.SaveChanges();
            }

            // booting all enabled services
            proxyService.InitialServices().Wait();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            #region Adding security headers
            var policyCollection = new HeaderPolicyCollection()
                .AddFrameOptionsDeny()
                .AddXssProtectionBlock()
                .AddContentTypeOptionsNoSniff()
                .AddReferrerPolicyStrictOriginWhenCrossOrigin()
                .RemoveServerHeader();

            app.UseSecurityHeaders(policyCollection);
            #endregion


            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<SessionHub>("/session");
            });

            app.UseOpenApi(); // serve documents (same as app.UseSwagger())
            app.UseSwaggerUi3(); // serve Swagger UI


            // 使用靜態檔案
            app.UseStaticFiles();

            // 使用SPA
            app.UseSpaStaticFiles();

            // SPA例外處理
            app.Use(async (context, next) =>
            {
                try
                {
                    await next();
                }
                catch (Exception e)
                {
                    if (e is InvalidOperationException && e.Message.Contains("/index.html"))
                    {
                        context.Response.StatusCode = (int)HttpStatusCode.NotFound;
                    }
                }
            });

            // SPA設定
            app.UseSpa(c => { });
        }
    }
}
