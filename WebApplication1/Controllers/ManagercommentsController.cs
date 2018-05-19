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
    public class ManagercommentsController : ApiController
    {
        // GET: api/Managercomments
        public IEnumerable<Managercomments> Get()
        {
            ProjectdbContext db = new ProjectdbContext();
            return db.Mcom.Select(emp => emp).ToList();
        }

        // GET: api/Managercomments/5
        public Managercomments Get(int id)
        {

            ProjectdbContext db = new ProjectdbContext();
            return db.Mcom.Where(d => d.Commission == id).FirstOrDefault();
        }

        // POST: api/Managercomments
        public void Post([FromBody]Managercomments value)
        {
            ProjectdbContext db = new ProjectdbContext();
            db.Mcom.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Managercomments/5
        public void Put(int id, [FromBody]Managercomments value)
        {
            ProjectdbContext db = new ProjectdbContext();
            Managercomments com = db.Mcom.Where(emp => emp.Commission == id).FirstOrDefault();
            if (com != null)
            {
                com.Comments = value.Comments;
               com.Pid = value.Pid;
                db.SaveChanges();
            }
        }

        // DELETE: api/Managercomments/5
        public void Delete(int id)
        {
            ProjectdbContext db = new ProjectdbContext();
            var del = db.Mcom.FirstOrDefault(d => d.Commission == id);
            if (del != null)
            {
                db.Mcom.Remove(del);
                db.SaveChanges();

            }
        }
    }
}
