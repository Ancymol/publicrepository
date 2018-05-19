import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-deletecomments',
  templateUrl: './deletecomments.component.html',
  styleUrls: ['./deletecomments.component.css']
})
export class DeletecommentsComponent implements OnInit {
  FormData: FormGroup;
  e;

  id = this.route.snapshot.paramMap.get("id")  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadComments();

    this.FormData = new FormGroup({
      // Commission: new FormControl('', []),
      // Comments: new FormControl('', []),
      // Pid: new FormControl('', []),
     
    });

  }
    loadComments() {
      this.http.get(`http://localhost:61161/api/Managercomments/${this.id}`).subscribe(
        data => {
          console.log(data);
          this.e = data;
  
  
        }
      )
    }
  
    OnClickSubmit(Employee){
      console.log(Employee);
      this.http.delete(`http://localhost:61161/api/Managercomments/${this.id}`,Employee).subscribe(
        data=>{console.log("Saved Successfully");
    this.router.navigate(['/managercomments/showcomments']);
    });
  }

}
