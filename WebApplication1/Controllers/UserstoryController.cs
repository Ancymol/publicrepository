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
    public class UserstoryController : ApiController
    {
        // GET: api/Userstory
        public IEnumerable<Userstory> Get()
        {
            ProjectdbContext db = new ProjectdbContext();
            return db.Userstories.Select(emp => emp).ToList();
        }

        // GET: api/Userstory/5
        public Userstory Get(int id)
        {
            ProjectdbContext db = new ProjectdbContext();
            return db.Userstories.Where(emp => emp.Us_id==id).FirstOrDefault();
            
        }

        // POST: api/Userstory
        public void Post(Userstory value)
        {
            ProjectdbContext db = new ProjectdbContext();
            db.Userstories.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Userstory/5
        public void Put(int id, [FromBody] Userstory value)
        {
            ProjectdbContext db = new ProjectdbContext();
            Userstory user = db.Userstories.Where(emp => emp.Us_id == id).FirstOrDefault();
            if (user != null)
            {
                user.story= value.story;
                user.Project_id = value.Project_id;
                db.SaveChanges();
            }
        }

        // DELETE: api/Userstory/5
        public void Delete(int id)
        {
            ProjectdbContext db = new ProjectdbContext();
            var del = db.Userstories.FirstOrDefault(d => d.Us_id == id);
            if (del != null)
            {
                db.Userstories.Remove(del);
                db.SaveChanges();

            }
        }
    }
}
