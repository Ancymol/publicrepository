import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {
  FormData: FormGroup;
  taskdetails;
  id = this.route.snapshot.paramMap.get("id") 
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadstory();

    this.FormData = new FormGroup({
      

    });
  }
  loadstory() {
    this.http.get(`http://localhost:61161/api/Ptask/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.taskdetails = data;

       
 });

    
  }

  OnClickSubmit(project){
    console.log(project);
    this.http.put(`http://localhost:61161/api/Ptask/${this.id}`,project).subscribe(
      data=>{console.log("Saved Successfully");
  this.router.navigate(['/projecttask/showtask']);
  });
      }
  

}