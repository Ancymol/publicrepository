import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../../services/story.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-showalluserstory',
  templateUrl: './showalluserstory.component.html',
  styleUrls: ['./showalluserstory.component.css']
})
export class ShowalluserstoryComponent implements OnInit {

  constructor(private storyService:StoryService) { }
  u;
  ngOnInit() {
    this.storyService.story$.subscribe(data=>{this.u=data;
      console.log(data);
    });
    this.storyService.ErrorResponse$.subscribe(message=>
      { console.log(message);
      alert(message);
    });
    
    this.storyService.getAllStory();
  }
  }
  

