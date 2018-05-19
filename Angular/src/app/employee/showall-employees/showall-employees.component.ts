import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-showall-employees',
  templateUrl: './showall-employees.component.html',
  styleUrls: ['./showall-employees.component.css']
})
export class ShowallEmployeesComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
employee;
  ngOnInit() {
    this.employeeService.employees$.subscribe(data=>{this.employee=data;
    console.log(data);
  });
  this.employeeService.ErrorResponse$.subscribe(message=>
    { console.log(message);
    alert(message);
  });
  
  this.employeeService.getAllEmployees();
}
}
