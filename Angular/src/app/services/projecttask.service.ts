import { Injectable } from '@angular/core';
import {CrudService} from './crud.service'
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjecttaskService {
  baseUrl='http://localhost:61161';
private projecttask=new Subject<any>();
projecttask$=this.projecttask.asObservable();
private ErrorResponse=new Subject<any>();
ErrorResponse$=this.ErrorResponse.asObservable();

constructor(private crudService:CrudService) { }
getAllProjectstask(){
  const url= `${this.baseUrl}/api/Ptask`;
  this.crudService.Read(url).subscribe(data=>{this.projecttask.next(data);
},error=>{console.log(error);this.ErrorResponse.next(error)
});
}

}

