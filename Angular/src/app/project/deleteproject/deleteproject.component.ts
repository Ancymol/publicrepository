import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-deleteproject',
  templateUrl: './deleteproject.component.html',
  styleUrls: ['./deleteproject.component.css']
})
export class DeleteprojectComponent implements OnInit {
  FormData: FormGroup;
  del;
  id = this.route.snapshot.paramMap.get("id")  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadstory();

    this.FormData = new FormGroup({
      

    });
  }
  loadstory() {
    this.http.get(`http://localhost:61161/api/Project/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.del = data;

      
      }
    )
  }

  OnClickSubmit(project){
    console.log(project);
    this.http.delete(`http://localhost:61161/api/Project/${this.id}`,project).subscribe(
      data=>{console.log("Delete Successfully");
  this.router.navigate(['/project/showproject']);
  });
      }
  

}

