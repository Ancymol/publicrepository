import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  FormData: FormGroup;
  pedit;
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
        this.pedit = data;

      }
    )
  }

  OnClickSubmit(project){
    console.log(project);
    this.http.put(`http://localhost:61161/api/Project/${this.id}`,project)
  this.router.navigate(['/project/showproject']);

      }
  

}


