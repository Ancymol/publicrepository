import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})


export class EditEmployeeComponent implements OnInit {
  FormData: FormGroup;
  e;

  id = this.route.snapshot.paramMap.get("id")  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.loadEmployees();

    this.FormData = new FormGroup({
      Eid: new FormControl('', []),
      EName: new FormControl('', []),
      Desg: new FormControl('', []),
      Mid: new FormControl('', []),
      Email: new FormControl('', []),
      SkillSet: new FormControl('', [])

    });

  }

  loadEmployees() {
    this.http.get(`http://localhost:61161/api/Employee/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.e = data;

        this.FormData = new FormGroup({
          EName: new FormControl(this.e.EName, []),
          Desg: new FormControl(this.e.Desg, []),
          Mid: new FormControl(this.e.Mid, []),
          Email: new FormControl(this.e.Email, []),
          SkillSet: new FormControl(this.e.SkillSet, [])

        });

      }
    )
  }

  OnClickSubmit(Employee){
    console.log(Employee);
    this.http.put(`http://localhost:61161/api/Employee/${this.id}`,Employee).subscribe(
      data=>{console.log("Saved Successfully");
  this.router.navigate(['/employees/showemployees']);
  });
      }
  

}


