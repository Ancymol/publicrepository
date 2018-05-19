using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.common;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        public IEnumerable<Employee> Get()
        {
            ProjectdbContext db = new ProjectdbContext();
            return db.Employees.Select(emp => emp).ToList();
        }

        // GET: api/Employee/5
        public Employee Get(int id)
        {
            ProjectdbContext db = new ProjectdbContext();
            return db.Employees.Where(d=>d.Eid==id).FirstOrDefault();
        }

        // POST: api/Employee
        public void Post(Employee value)
        {
            ProjectdbContext db = new ProjectdbContext();
            db.Employees.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Employee/5
        public void Put(int id, [FromBody]Employee e)
        {
            ProjectdbContext db = new ProjectdbContext();
            Employee e1 = db.Employees.Where(emp => emp.Eid == id).FirstOrDefault();
            if(e1 != null)
            {
                e1.EName = e.EName;
                e1.Desg = e.Desg;
                e1.Mid = e.Mid;
                e1.Email = e.Email;
                e1.SkillSet = e.SkillSet;
                db.SaveChanges();
            }
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
            ProjectdbContext db = new ProjectdbContext();
            var del = db.Employees.FirstOrDefault(d => d.Eid == id);
            if (del != null)
            {
                db.Employees.Remove(del);
                db.SaveChanges();
               
        }
        }
    }
}
