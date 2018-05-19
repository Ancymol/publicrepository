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
    public class PtaskController : ApiController
    {
        // GET: api/Ptask
        public IEnumerable<Ptask> Get()
        {
            ProjectdbContext db = new ProjectdbContext();
            return db.Ptask.Select(emp => emp).ToList();
        }

        // GET: api/Ptask/5
        public Ptask Get(int id)
        {
            ProjectdbContext db = new ProjectdbContext();
            return db.Ptask.Where(d => d.Tid == id).FirstOrDefault();
        }

        // POST: api/Ptask
        public void Post([FromBody]Ptask value)
        {
            ProjectdbContext db = new ProjectdbContext();
            db.Ptask.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Ptask/5
        public void Put(int id, [FromBody] Ptask value)
        {
            ProjectdbContext db = new ProjectdbContext();
            Ptask p = db.Ptask.Where(emp => emp.Tid == id).FirstOrDefault();
            if (p != null)
            {
                p.Tid = value.Tid;
                p.AsTo = value.AsTo;
                p.tsdate = value.tsdate;
                p.tedate = value.tedate;
                p.Tc = value.Tc;
                p.uid = value.uid;
                db.SaveChanges();
            }
        }

        // DELETE: api/Ptask/5
        public void Delete(int id)
        {
            ProjectdbContext db = new ProjectdbContext();
            var del = db.Ptask.FirstOrDefault(d => d.Tid == id);
            if (del != null)
            {
                db.Ptask.Remove(del);
                db.SaveChanges();

            }
        }
    }
}
