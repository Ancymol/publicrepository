import { Injectable } from '@angular/core';
import {CrudService} from './crud.service'
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl='http://localhost:61161';
private employees=new Subject<any>();
employees$=this.employees.asObservable();
private ErrorResponse=new Subject<any>();
ErrorResponse$=this.ErrorResponse.asObservable();

  constructor(private crudService:CrudService) { }
  getAllEmployees(){
    const url= `${this.baseUrl}/api/Employee`;
    this.crudService.Read(url).subscribe(data=>{this.employees.next(data);
  },error=>{console.log(error);this.ErrorResponse.next(error)
  });
}
}
