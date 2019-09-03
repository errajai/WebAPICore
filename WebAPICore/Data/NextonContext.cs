using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPICore.Models;

namespace WebAPICore.Data
{
    public class NextonContext : DbContext
    {
        public NextonContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Nextone> Nextones { get; set; }
        public DbSet<Mission> Missions { get; set; }
    }
}
