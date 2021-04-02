using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Accesses.Repositories
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<HolePunchContext>
    {
        public HolePunchContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<HolePunchContext>();
            optionsBuilder.UseNpgsql(System.IO.File.ReadAllText("connection.txt"));

            return new HolePunchContext(optionsBuilder.Options);
        }
    }
}
