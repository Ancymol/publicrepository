using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Userstory
    {
        [Key]
        public int Us_id { get; set; }
        public string story { get; set; }
        public int Project_id { get; set; }
        [ForeignKey(" Project_id  ")]
        public Project Proid { get; set; }
    }
}