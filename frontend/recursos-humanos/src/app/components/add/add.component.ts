import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee, EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor(private router: Router, private employeesService:EmployeesService) {}

  employeeForm : FormGroup = new FormGroup({
    employee_id: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    hire_date: new FormControl(''),
    job_id: new FormControl(''),
    salary: new FormControl(''),
    commission_pct: new FormControl(''),
    manager_id: new FormControl(''),
    department_id: new FormControl(''),
  });

  postForm(form: Employee) {
    this.employeesService.postEmployee(form).subscribe(
      (response) => {
        console.log(response);
        this.back();
      },
      (error) => {
        console.error('Error al obtener datos desde el backend:', error);
      }
    );
  }

  back() {
    this.router.navigate(['/form']);
  }

}
