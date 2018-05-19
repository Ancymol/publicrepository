import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ProjecttaskService} from '../../services/projecttask.service';
@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {

  constructor(private ptaskService:ProjecttaskService) { }
t;
ngOnInit() {
  this.ptaskService.projecttask$.subscribe(data=>{this.t=data;
  console.log(data);
});
this.ptaskService.ErrorResponse$.subscribe(message=>
  { console.log(message);
  alert(message);
});

this.ptaskService.getAllProjectstask();
}
}

