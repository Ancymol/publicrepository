import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-deletestory',
  templateUrl: './deletestory.component.html',
  styleUrls: ['./deletestory.component.css']
})
export class DeletestoryComponent implements OnInit {
  FormData: FormGroup;
  delstory;
  id = this.route.snapshot.paramMap.get("id")  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  
  this.loadStory();

  this.FormData = new FormGroup({


  });
}
loadStory() {
  this.http.get(`http://localhost:61161/api/Userstory/${this.id}`).subscribe(
    data => {
      
        
      });


}
OnClickSubmit(story){
console.log(story);
this.http.delete(`http://localhost:61161/api/Userstory/${this.id}`).subscribe(
  data=>{console.log("Delete Successfully");
    this.router.navigate(['/userstory/showstory']);

});
}
}
