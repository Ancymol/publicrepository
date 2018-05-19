import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagercommentsService } from '../../services/managercomments.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-showallcomments',
  templateUrl: './showallcomments.component.html',
  styleUrls: ['./showallcomments.component.css']
})
export class ShowallcommentsComponent implements OnInit {

  constructor(private commentService:ManagercommentsService) { }
comments;
  ngOnInit() {
    this.commentService.comments$.subscribe(data=>{this.comments=data;
    console.log(data);
  });
  this.commentService.ErrorResponse$.subscribe(message=>
    { console.log(message);
    alert(message);
  });
  
  this.commentService.getAllComments();
}
}
