import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  FormData:FormGroup;
  screate;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.FormData=new FormGroup({
    
     
      Pname:new FormControl('',[Validators.required]),
      StartDate :new FormControl('',[Validators.required]),
      endDate:new FormControl('',[Validators.required]),
      ClientName:new FormControl('',[Validators.required]),
    });
  }
  OnClickSubmit(project){
    console.log(project);
    this.http.post('http://localhost:61161//api/Project',project).subscribe(data=>{console.log("Saved Successfully");
  this.router.navigate(['/project/showproject']);
  });
      }
    }
  

