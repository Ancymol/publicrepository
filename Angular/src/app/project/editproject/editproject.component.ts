import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  FormData: FormGroup;
  pedit;
  id = this.route.snapshot.paramMap.get("id") 

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadstory();

    this.FormData = new FormGroup({
      Project_Id: new FormControl('', []),
      Pname: new FormControl('', []),
      StartDate: new FormControl('', []),
      endDate: new FormControl('', []),
      ClientName: new FormControl('', []),
     

    });
  }
  loadstory() {
    this.http.get(`http://localhost:61161/api/Project/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.pedit = data;

        this.FormData = new FormGroup({
          Project_Id: new FormControl(this.pedit.Project_Id, []),
          Pname: new FormControl(this.pedit. Pname, []),
          StartDate: new FormControl(this.pedit.StartDate, []),
          endDate: new FormControl(this.pedit.endDate, []),
          ClientName: new FormControl(this.pedit.ClientName, []),
  

        });

      }
    )
  }

  OnClickSubmit(project){
    console.log(project);
    this.http.put(`http://localhost:61161/api/Project/${this.id}`,project).subscribe(
      data=>{console.log("Saved Successfully");
  this.router.navigate(['/project/showproject']);
  });
      }
  

}

