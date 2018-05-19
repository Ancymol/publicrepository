import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
  FormData: FormGroup;
  del;
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
        this.del = data;
       

        });


      }
OnClickSubmit(Employee){
  console.log(Employee);
  this.http.delete(`http://localhost:61161/api/Employee/${this.id}`).subscribe(
    data=>{console.log("Delete Successfully");
      this.router.navigate(['/employees/showemployees']);

});
}
}
