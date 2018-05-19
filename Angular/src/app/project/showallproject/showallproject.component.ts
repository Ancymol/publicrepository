import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../../services/project.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-showallproject',
  templateUrl: './showallproject.component.html',
  styleUrls: ['./showallproject.component.css']
})
export class ShowallprojectComponent implements OnInit {

  constructor(private projectService:ProjectService) { }
p
  ngOnInit() {
    this.projectService.project$.subscribe(data=>{this.p=data;
      console.log(data);
    });
    this.projectService.ErrorResponse$.subscribe(message=>
      { console.log(message);
      alert(message);
    });
    
    this.projectService.getAllProjects();
  }
  }



     



