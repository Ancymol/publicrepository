import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-createstory',
  templateUrl: './createstory.component.html',
  styleUrls: ['./createstory.component.css']
})
export class CreatestoryComponent implements OnInit {
FormData:FormGroup
userstory;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.FormData=new FormGroup({
    
      story:new FormControl('',[Validators.required]),
      Project_id:new FormControl('',[Validators.required])

    });
  }
  OnClickSubmit(story){
    console.log(story);
    this.http.post('http://localhost:61161/api/Userstory',story).subscribe(data=>{console.log("Saved Successfully");
  this.router.navigate(['/userstory/showstory']);
  });
      }
    }
  
