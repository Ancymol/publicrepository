import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-createprojecttask',
  templateUrl: './createprojecttask.component.html',
  styleUrls: ['./createprojecttask.component.css']
})
export class CreateprojecttaskComponent implements OnInit {
  FormData:FormGroup;
  tcreate;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.FormData=new FormGroup({
    
      Tid:new FormControl('',[Validators.required]),
      AsTo:new FormControl('',[Validators.required]),
      tsdate :new FormControl('',[Validators.required]),
      tedate:new FormControl('',[Validators.required]),
      Tc:new FormControl('',[Validators.required]),
      uid:new FormControl('',[Validators.required]),
    });
  }
  OnClickSubmit(projecttask){
    console.log(projecttask);
    this.http.post('http://localhost:61161/api/Ptask',projecttask).subscribe(data=>{console.log("Saved Successfully");
  this.router.navigate(['/projecttask/showtask']);
  });
      }
    }
  

