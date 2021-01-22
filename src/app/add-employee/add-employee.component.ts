import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../employee.model'
import { EmployeeDetailComponent } from '../employees/employee-detail/employee-detail.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: number = null;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((Params)=> {
      this.employeeId = +Params["id"];
    })
    this.employeeForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      imageUrl: new FormControl(null, [Validators.required])
    });

    if(this.employeeId >= 0){
      let empCopy: Employee[] = JSON.parse(localStorage.getItem('employees'));
      let index = empCopy.map((e) => { return e.id}).indexOf(this.employeeId);
      let employee = empCopy[index];
      this.employeeForm.patchValue(employee);
    }else if(this.employeeId && this.employeeId == 0){
      let empCopy: Employee[] = JSON.parse(localStorage.getItem('employees'));
      let index = empCopy.map((e) => { return e.id}).indexOf(this.employeeId);
      let employee = empCopy[index];
      this.employeeForm.patchValue(employee);
    }
  }

  onSubmit(){
    if(this.employeeForm.valid){
    if(this.employeeId && this.employeeId == 0){
      let empCopy: Employee[] = JSON.parse(localStorage.getItem('employees'));
      let emp: Employee = this.employeeForm.value;
      emp.id = this.employeeId+1;
      let index = empCopy.map((e) => { return e.id}).indexOf(this.employeeId);
      empCopy[index] = emp;
      localStorage.setItem('employees', JSON.stringify(empCopy));
      this.router.navigateByUrl('employees');
    }else if(this.employeeId >= 0){
      let empCopy: Employee[] = JSON.parse(localStorage.getItem('employees'));
      let emp: Employee = this.employeeForm.value;
      emp.id = this.employeeId+1;
      let index = empCopy.map((e) => { return e.id}).indexOf(this.employeeId);
      empCopy[index] = emp;
      localStorage.setItem('employees', JSON.stringify(empCopy));
      this.router.navigateByUrl('employees');
    }else if(this.employeeId >= 0){
    }
    else{
    if(localStorage.getItem('employees') !== null){
      let empCopy: Employee[] = JSON.parse(localStorage.getItem('employees'));
      let emp: Employee = this.employeeForm.value;
      emp.id = empCopy.length+1;
      empCopy.push(emp);
      localStorage.setItem('employees', JSON.stringify(empCopy));
      this.router.navigateByUrl('employees');
    }else{
      let empCopy: Employee[] = [];
      let emp: Employee = this.employeeForm.value;
      emp.id = 1;
      empCopy.push(emp);
      localStorage.setItem('employees', JSON.stringify(empCopy));
      this.router.navigateByUrl('employees');
    }
  }
  }
  }
}
