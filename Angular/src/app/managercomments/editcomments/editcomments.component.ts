import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-editcomments',
  templateUrl: './editcomments.component.html',
  styleUrls: ['./editcomments.component.css']
})
export class EditcommentsComponent implements OnInit {
  FormData: FormGroup;
  e;

  id = this.route.snapshot.paramMap.get("id")  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadComments();

    this.FormData = new FormGroup({
      Commission: new FormControl('', []),
      Comments: new FormControl('', []),
      Pid: new FormControl('', []),
     
    });

  }
    loadComments() {
      this.http.get(`http://localhost:61161/api/Managercomments/${this.id}`).subscribe(
        data => {
          console.log(data);
          this.e = data;
  
          this.FormData = new FormGroup({
            Commission: new FormControl(this.e.Commision, []),
            Comments: new FormControl(this.e.Comments, []),
            Pid: new FormControl(this.e.Pid, []),
            
          });
  
        }
      )
    }
  
    OnClickSubmit(Employee){
      console.log(Employee);
      this.http.put(`http://localhost:61161/api/Managercomments/${this.id}`,Employee).subscribe(
        data=>{console.log("Saved Successfully");
    this.router.navigate(['/managercomments/showcomments']);
    });
  }

}