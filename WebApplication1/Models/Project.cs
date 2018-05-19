using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Project
    {

        [Key]
        public int Project_Id { get; set; }
        public string Pname { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime endDate { get; set; }
        public string ClientName { get; set; }
    }
}