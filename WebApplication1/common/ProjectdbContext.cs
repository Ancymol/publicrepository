using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1.common
{
    public class ProjectdbContext : DbContext
    {
        public ProjectdbContext() : base("Data Source=COM\\SQLEXPRESS;Initial Catalog=Angulardb1;Integrated Security=True")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<Userstory> Userstories { get; set; }
        public DbSet<Ptask> Ptask { get; set; }
       public DbSet<Managercomments> Mcom { get; set; }
    }
}