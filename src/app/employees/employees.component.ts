import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  total: number = null;
  totalPages: number;
  currentPage: number = 1;
  currentEmployees: Employee[] = [];
  pager: number[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    // let emp: Employee[] =  [
    //   {
    //     "id": 1,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 2,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 3,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 4,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 5,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 6,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 7,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 8,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 9,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 10,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 11,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 12,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 13,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 14,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 15,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 16,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 17,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 18,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 19,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 20,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 21,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 22,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 22,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 23,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 24,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 25,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 26,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 27,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 28,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 29,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 30,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 31,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   },
    //   {
    //     "id": 32,
    //     "firstName" : "Something",
    //     "lastName" : "Something",
    //     "email": "Something@something",
    //     "imageUrl": "https://image.shutterstock.com/image-vector/profile-icon-260nw-582941545.jpg"
    //   }
    // ];
    // localStorage.setItem('employees', JSON.stringify(emp));
    this.employees = JSON.parse(localStorage.getItem('employees'));
    this.total = this.employees.length;
    this.totalPages= Math.ceil(this.total/8);
    this.pager = [];
    for(let i=1; i<=this.totalPages; i++){
      this.pager.push(i);
    }
    this.pageEmployees();
  }
  pageEmployees() {
    let firstIndex = (8*this.currentPage-8);
    let endIndex =   8*this.currentPage;
    this.currentEmployees = this.employees.slice(firstIndex, endIndex);
  }

  pageChange(page: number){
    this.currentPage = page;
    this.ngOnInit();
  }

  detail(i: number){
    this.router.navigateByUrl('/employee-details/' + i);
  }

}
