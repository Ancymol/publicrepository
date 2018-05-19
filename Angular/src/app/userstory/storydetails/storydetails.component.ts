import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-storydetails',
  templateUrl: './storydetails.component.html',
  styleUrls: ['./storydetails.component.css']
})
export class StorydetailsComponent implements OnInit {
  FormData: FormGroup;
  details;
  id = this.route.snapshot.paramMap.get("id") 
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  
    this.loadstory();

    this.FormData = new FormGroup({
      
    });

 
}

  loadstory() {
    this.http.get(`http://localhost:61161/api/Userstory/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.details = data;


      }
    )
  }
  OnClickSubmit(story){
    console.log(story);
    this.http.get(`http://localhost:61161/api/Userstory/${this.id}`,story).subscribe(
      data=>{console.log("Saved Successfully");
  this.router.navigate(['/userstory/showstory']);
  });
      }
  

}