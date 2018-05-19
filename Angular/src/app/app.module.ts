import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowallEmployeesComponent } from './employee/showall-employees/showall-employees.component';
import { ProjectComponent } from './project/project.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { ShowallprojectComponent } from './project/showallproject/showallproject.component';
import { ShowalluserstoryComponent } from './userstory/showalluserstory/showalluserstory.component';
import { CreatestoryComponent } from './userstory/createstory/createstory.component';
import { ShowtaskComponent } from './projecttask/showtask/showtask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { EditstoryComponent } from './userstory/editstory/editstory.component';
import { ServicesComponent } from './services/services.component';

import { EmployeeService } from './services/employee.service';
import { DeletestoryComponent } from './userstory/deletestory/deletestory.component';
import { StorydetailsComponent } from './userstory/storydetails/storydetails.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
import { CreateprojecttaskComponent } from './projecttask/createprojecttask/createprojecttask.component';
import { DeletetaskComponent } from './projecttask/deletetask/deletetask.component';
import { EdittaskComponent } from './projecttask/edittask/edittask.component';
import { TaskdetailsComponent } from './projecttask/taskdetails/taskdetails.component';
import { ProjectdetailsComponent } from './project/projectdetails/projectdetails.component';
import { ManagercommentsComponent } from './managercomments/managercomments.component';
import { ShowallcommentsComponent } from './managercomments/showallcomments/showallcomments.component';
import { CreatecommentsComponent } from './managercomments/createcomments/createcomments.component';
import { EditcommentsComponent } from './managercomments/editcomments/editcomments.component';
import { DeletecommentsComponent } from './managercomments/deletecomments/deletecomments.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    ShowallEmployeesComponent,
    ProjectComponent,
    UserstoryComponent,
    ProjecttaskComponent,
    CreateemployeeComponent,
    CreateprojectComponent,
    ShowallprojectComponent,
    ShowalluserstoryComponent,
    CreatestoryComponent,
    ShowtaskComponent,
    EditEmployeeComponent,
    DeleteemployeeComponent,
    EmployeedetailsComponent,
    EditstoryComponent,
    ServicesComponent,
    DeletestoryComponent,
    StorydetailsComponent,
    EditprojectComponent,
    DeleteprojectComponent,
    CreateprojecttaskComponent,
    DeletetaskComponent,
    EdittaskComponent,
    TaskdetailsComponent,
    ProjectdetailsComponent,
    ManagercommentsComponent,
    ShowallcommentsComponent,
    CreatecommentsComponent,
    EditcommentsComponent,
    DeletecommentsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
