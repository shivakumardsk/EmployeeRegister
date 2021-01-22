import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employeeId: number = null;
  employee: Employee;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((Params)=> {
      this.employeeId = +Params["id"];
    })
    let emps: Employee[] = JSON.parse(localStorage.getItem('employees'));
    this.employee = emps.find((emp)=>{
      return emp.id === this.employeeId;
    });
  }

  update(){
    this.router.navigateByUrl('/add-employee/'+ this.employeeId);
  }

  remove(){
    let emps: Employee[] = JSON.parse(localStorage.getItem('employees'));
    let index = emps.map((e) => { return e.id}).indexOf(this.employeeId);
    emps.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(emps));
    this.router.navigateByUrl('/employees');
  }
}
