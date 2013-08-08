using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace HotTowelExample1.Models
{
    public class EmployeeDBContext : DbContext
    {
        public EmployeeDBContext()
            : base("name=HotTowelConnectionString")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }


        public DbSet<Employee> Employee { get; set; }

    }

}