using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Ptask
    {
        [Key]

        public int Tid { get; set; }
        public int AsTo { get; set; }
        [ForeignKey("AsTo")]
        public Employee ast { get; set; }
        public DateTime tsdate { get; set; }
        public DateTime tedate { get; set; }
        public DateTime Tc { get; set; }
        public int uid { get; set; }
        [ForeignKey(" uid ")]
        public Userstory id { get; set; }
    }
}