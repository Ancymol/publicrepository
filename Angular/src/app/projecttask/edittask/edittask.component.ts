import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  FormData: FormGroup;
  taskedit;
  id = this.route.snapshot.paramMap.get("id") 
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadstory();

    this.FormData = new FormGroup({
      Tid:new FormControl('',[Validators.required]),
      AsTo:new FormControl('',[Validators.required]),
      tsdate :new FormControl('',[Validators.required]),
      tedate:new FormControl('',[Validators.required]),
      Tc:new FormControl('',[Validators.required]),
      uid:new FormControl('',[Validators.required]),

    });
  }
  loadstory() {
    this.http.get(`http://localhost:61161/api/Ptask/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.taskedit = data;

        this.FormData = new FormGroup({
          Tid:new FormControl(this.taskedit.Tid,[]),
          AsTo:new FormControl(this.taskedit.AsTo,[]),
          tsdate :new FormControl(this.taskedit.tsdate,[]),
          tedate:new FormControl(this.taskedit.tedate,[]),
          Tc:new FormControl(this.taskedit.Tc,[]),
          uid:new FormControl(this.taskedit.uid,[]),
    
 });

      }
    )
  }

  OnClickSubmit(project){
    console.log(project);
    this.http.put(`http://localhost:61161/api/Ptask/${this.id}`,project).subscribe(
      data=>{console.log("Saved Successfully");
  this.router.navigate(['/projecttask/showtask']);
  });
      }
  

}