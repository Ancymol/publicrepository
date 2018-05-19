import { Injectable } from '@angular/core';
import {CrudService} from './crud.service'
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManagercommentsService {
  baseUrl='http://localhost:61161';
  private comments=new Subject<any>();
  comments$=this.comments.asObservable();
  private ErrorResponse=new Subject<any>();
  ErrorResponse$=this.ErrorResponse.asObservable();
  
  constructor(private crudService:CrudService) { }
  getAllComments(){
    const url= `${this.baseUrl}/api/Managercomments`;
    this.crudService.Read(url).subscribe(data=>{this.comments.next(data);
  },error=>{console.log(error);this.ErrorResponse.next(error)
  });
}
}