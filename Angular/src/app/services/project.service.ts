import { Injectable } from '@angular/core';
import {CrudService} from './crud.service'
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl='http://localhost:61161';
private projects=new Subject<any>();
project$=this.projects.asObservable();
private ErrorResponse=new Subject<any>();
ErrorResponse$=this.ErrorResponse.asObservable();


  constructor(private crudService:CrudService) { }
  getAllProjects(){
    const url= `${this.baseUrl}/api/Project`;
    this.crudService.Read(url).subscribe(data=>{this.projects.next(data);
  },error=>{console.log(error);this.ErrorResponse.next(error)
  });
}

}
