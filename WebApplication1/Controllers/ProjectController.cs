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
    public class ProjectController : ApiController
    {
        // GET: api/Project
        public IEnumerable<Project> Get()
        {

            ProjectdbContext db = new ProjectdbContext();
            return db.Project.Select(emp => emp).ToList();
        }

        // GET: api/Project/5
        public Project Get(int id)
        {
            ProjectdbContext db = new ProjectdbContext();
            return db.Project.Where(d => d.Project_Id == id).FirstOrDefault();
        }

        // POST: api/Project
        public void Post([FromBody]Project value)
        {
            ProjectdbContext db = new ProjectdbContext();
            db.Project.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Project/5
        public void Put(int id, [FromBody]Project value)
        {
            ProjectdbContext db = new ProjectdbContext();
            Project project = db.Project.Where(emp => emp.Project_Id == id).FirstOrDefault();
            if (project != null)
            {
                project.Pname = value.Pname;
                project.StartDate = value.StartDate;
                project.endDate = value.endDate;
                project.ClientName = value.ClientName;
                db.SaveChanges();
            }
        }

        // DELETE: api/Project/5
        public void Delete(int id)
        {

            ProjectdbContext db = new ProjectdbContext();
            var del = db.Project.FirstOrDefault(d => d.Project_Id== id);
            if (del != null)
            {
                db.Project.Remove(del);
                db.SaveChanges();

            }
        }
    }
}
