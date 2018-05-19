import { Injectable } from '@angular/core';
import {CrudService} from './crud.service'
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  baseUrl='http://localhost:61161';
  private story=new Subject<any>();
  story$=this.story.asObservable();
  private ErrorResponse=new Subject<any>();
  ErrorResponse$=this.ErrorResponse.asObservable();

  constructor(private crudService:CrudService) { }
  getAllStory(){
    const url= `${this.baseUrl}/api/Userstory`;
    this.crudService.Read(url).subscribe(data=>{this.story.next(data);
  },error=>{console.log(error);this.ErrorResponse.next(error)
  });
}

}