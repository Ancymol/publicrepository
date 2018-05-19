import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowallEmployeesComponent } from './employee/showall-employees/showall-employees.component';
import { ShowallcommentsComponent} from './managercomments/showallcomments/showallcomments.component';
import { ShowallprojectComponent } from './project/showallproject/showallproject.component';
import { ShowalluserstoryComponent} from './userstory/showalluserstory/showalluserstory.component';
import { ShowtaskComponent} from './projecttask/showtask/showtask.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagercommentsComponent } from './managercomments/managercomments.component';
import { ProjectComponent } from './project/project.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { CreatecommentsComponent } from './managercomments/createcomments/createcomments.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { CreatestoryComponent } from './userstory/createstory/createstory.component';
import { CreateprojecttaskComponent} from './projecttask/createprojecttask/createprojecttask.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { EditcommentsComponent } from './managercomments/editcomments/editcomments.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { DeletecommentsComponent } from './managercomments/deletecomments/deletecomments.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
import { DeletetaskComponent } from './projecttask/deletetask/deletetask.component';
import { DeletestoryComponent } from './userstory/deletestory/deletestory.component';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { ProjectdetailsComponent } from './project/projectdetails/projectdetails.component';
import { StorydetailsComponent } from './userstory/storydetails/storydetails.component';
import { EditstoryComponent } from './userstory/editstory/editstory.component';
import { EditprojectComponent} from './project/editproject/editproject.component';
import {EdittaskComponent} from './projecttask/edittask/edittask.component';
import { TaskdetailsComponent } from './projecttask/taskdetails/taskdetails.component';



const routes:Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[]

},
{
path:'',
redirectTo:'/home',
pathMatch:'full'
},


{
  path:'employees',
  component:EmployeeComponent,
  children:[
    { path:'showemployees',
  component:ShowallEmployeesComponent,
  children:[]
},
{ path:'create',
  component:CreateemployeeComponent,
  children:[]
},
{ path:'edit/:id',
  component:EditEmployeeComponent,
  children:[]
},
{
path:'details/:id',
  component:EmployeedetailsComponent,
  children:[]
},
{
  path:'delete/:id',
    component:DeleteemployeeComponent,
    children:[]
  }]
},


{
  path:'project',
  component:ProjectComponent,
  children:[
    { path:'showproject',
  component:ShowallprojectComponent,
  children:[]
},
{ path:'create',
  component:CreateprojectComponent,
  children:[]
},
{
   path:'edit/:id',
component:EditprojectComponent,
children:[]
},
{
  path:'details/:id',
    component:ProjectdetailsComponent,
    children:[]
  },
{
  path:'delete/:id',
component:DeleteprojectComponent,
children:[]
}]
},



{
  path:'userstory',
  component:UserstoryComponent,
  children:[
    {
    path:'showstory',
    component:ShowalluserstoryComponent,
    children:[]
  },
  {
  path:'create',
    component:CreatestoryComponent,
    children:[]
  },
{
   path:'edit/:id',
  component:EditstoryComponent,
  children:[]
},
{
  path:'delete/:id',
    component:DeletestoryComponent,
    children:[]
  },
  {
    path:'details/:id',
      component:StorydetailsComponent,
      children:[]
    },
  ]

},
{
  path:'managercomments',
  component:ManagercommentsComponent,
  children:[
    {
    path:'showcomments',
    component:ShowallcommentsComponent,
    children:[]
  },
  {
  path:'create',
    component:CreatecommentsComponent,
    children:[]
  },
{
   path:'edit/:id',
  component:EditcommentsComponent,
  children:[]
},
{
  path:'delete/:id',
    component:DeletecommentsComponent,
    children:[]
  },
  
  ]

},
{
  path:'projecttask',
  component:ProjecttaskComponent,
  children:[
    {
      path:'showtask',
      component:ShowtaskComponent,
      children:[]
    },
    {
      path:'create',
      component:CreateprojecttaskComponent,
      children:[]
    },
    {
      path:'edit/:id',
   component:EdittaskComponent,
   children:[]
   },
   {
    path:'details/:id',
      component:TaskdetailsComponent,
      children:[]
    },
   {
     path:'delete/:id',
   component:DeletetaskComponent,
   children:[]
   }
    
    
  ]

}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
