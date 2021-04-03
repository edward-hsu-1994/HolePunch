using HolePunch.Web.Controllers;
using HolePunch.Web.Models;

using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Reactive.Concurrency;
using System.Reactive.Linq;
using System.Threading.Tasks;

namespace HolePunch.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            NetworkSpeedWatch();
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    config.AddEnvironmentVariables(prefix: "HolePunch_");
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

        public static void NetworkSpeedWatch()
        {
            Observable.Interval(TimeSpan.FromSeconds(1)).Select(x =>
            {
                NetworkInterface[] adapters = NetworkInterface.GetAllNetworkInterfaces();

                long rece = 0, sent = 0, speed = 0;
                foreach (NetworkInterface adapter in adapters)
                {
                    IPInterfaceProperties properties = adapter.GetIPProperties();

                    if (!properties.GatewayAddresses.Any())
                    {
                        continue;
                    }

                    IPv4InterfaceStatistics stats = adapter.GetIPv4Statistics();

                    rece += stats.BytesReceived * 8;
                    sent += stats.BytesSent * 8;

                    speed += adapter.Speed;
                }

                return (received: rece, sent: sent, speed: speed);
            })
            .Buffer(2, 1)
            .ObserveOn(Scheduler.Default)
            .Subscribe(x =>
            {
                NetworkSpeed speed = new NetworkSpeed();
                speed.In = (x[1].received - x[0].received);
                speed.Out = (x[1].sent - x[0].sent);
                speed.MaxIn = x[0].speed;
                speed.MaxOut = x[0].speed;
                SystemController.Speed = speed;
            });
        }
    }
}
