namespace HotTowelExample1.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using HotTowelExample1.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<HotTowelExample1.Models.EmployeeDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(HotTowelExample1.Models.EmployeeDBContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            
            var employee1 = new Employee(){
                EmployeeName="Test1"
            };

            var employee2 = new Employee(){
            EmployeeName="Test2"
            };

            context.Employee.AddOrUpdate(employee1);
            context.Employee.AddOrUpdate(employee2);
        }
    }
}
