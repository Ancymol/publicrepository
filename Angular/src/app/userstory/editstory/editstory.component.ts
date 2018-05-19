import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-editstory',
  templateUrl: './editstory.component.html',
  styleUrls: ['./editstory.component.css']
})
export class EditstoryComponent implements OnInit {
  FormData: FormGroup;
  sedit;
  id = this.route.snapshot.paramMap.get("id")  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadstory();

    this.FormData = new FormGroup({
      Us_id: new FormControl('', []),
      story: new FormControl('', []),
      Project_id: new FormControl('', []),
    });

 
}

  loadstory() {
    this.http.get(`http://localhost:61161/api/Userstory/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.sedit = data;

        this.FormData = new FormGroup({
          Us_id: new FormControl(this.sedit.Us_id, []),
          story: new FormControl(this.sedit.story, []),
           Project_id: new FormControl(this.sedit.Project_id, []),

        
        });

      }
    )
  }
  OnClickSubmit(story){
    console.log(story);
    this.http.put(`http://localhost:61161/api/Userstory/${this.id}`,story).subscribe(
      data=>{console.log("Saved Successfully");
  this.router.navigate(['/userstory/showstory']);
  });
      }
  

}

