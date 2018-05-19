using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Managercomments
    {
        [Key]
        public int Commission { get; set; }
        public string Comments { get; set; }
        public int Pid { get; set; }
        [ForeignKey(" Pid ")]
        public Ptask id { get; set; }
    }
}