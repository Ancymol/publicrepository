import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-createcomments',
  templateUrl: './createcomments.component.html',
  styleUrls: ['./createcomments.component.css']
})
export class CreatecommentsComponent implements OnInit {
 
    FormData:FormGroup;
   comments;
    constructor(private http:HttpClient,private router:Router) { }
    
      ngOnInit() {
        this.FormData=new FormGroup({
         Commission:new FormControl('',[Validators.required]),
         Comments:new FormControl('',[Validators.required]),
         Pid:new FormControl('',[Validators.required]),
         
    
        });
      }
    OnClickSubmit(comment){
      console.log(comment);
      this.http.post('http://localhost:61161/api/Managercomments',comment).subscribe(data=>{console.log("Saved Successfully");
    this.router.navigate(['managercomments/showcomments']);
    });
        }
      }
    
    
