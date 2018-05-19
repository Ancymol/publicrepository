import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
FormData:FormGroup;
Employee;
constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.FormData=new FormGroup({
      // Eid:new FormControl('',[Validators.required]),
      EName:new FormControl('',[Validators.required]),
      Desg:new FormControl('',[Validators.required]),
      Mid:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      SkillSet:new FormControl('',[Validators.required])

    });
    
  console.log(this.FormData);
    this.showemployees();
  }
  showemployees(){
    this.http.get("http://localhost:61161/api/Employee").subscribe(data=>{this.Employee=data;
  });
  }
OnClickSubmit(Employee){
  console.log(Employee);
  this.http.post('http://localhost:61161/api/Employee',Employee).subscribe(data=>{console.log("Saved Successfully");
this.router.navigate(['/employees/showemployees']);
});
    }
  }


