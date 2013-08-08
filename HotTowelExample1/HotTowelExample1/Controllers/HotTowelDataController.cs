using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Breeze.WebApi;
using HotTowelExample1.Models;

namespace HotTowelExample1.Controllers
{
    [BreezeController]
    public class HotTowelDataController : ApiController
    {
        readonly EFContextProvider<EmployeeDBContext> _contextProvider =
            new EFContextProvider<EmployeeDBContext>();

        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        [HttpGet]
        public IQueryable<Employee> GetEmployees()
        {
            return _contextProvider.Context.Employee;
        }
    }
}