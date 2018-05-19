using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Employee
    {
        [Key]
        public int Eid { get; set; }
        public string EName { get; set; }
        public string Desg { get; set; }
        public int Mid { get; set; }
        [ForeignKey(" Mid ")]
        [System.Runtime.Serialization.IgnoreDataMember]
        public Employee Managerid { get; set; }
        public string Email { get; set; }
        public string SkillSet { get; set; }
    }
}

