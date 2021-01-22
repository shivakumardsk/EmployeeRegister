import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [
  {path: '', redirectTo:'/employees', pathMatch:'full'},
  {path: 'employees', component: EmployeesComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'add-employee/:id', component: AddEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
