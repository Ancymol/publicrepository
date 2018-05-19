import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  FormData: FormGroup;
  details;
  id = this.route.snapshot.paramMap.get("id") 
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadEmployees();

    this.FormData = new FormGroup({
     
    });
  }
  loadEmployees() {
    this.http.get(`http://localhost:61161/api/Employee/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.details = data;
        this.FormData = new FormGroup({
         

        });

      })
  }
OnClickSubmit(Employee){
  console.log(Employee);
  this.http.get(`http://localhost:61161/api/Employee/${this.id}`,Employee).subscribe(
    data=>{console.log(data);

});
  }

}
