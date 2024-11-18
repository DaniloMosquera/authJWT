import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  constructor(private router: Router, private employeesService: EmployeesService, private activatedRoute: ActivatedRoute) { }

  employeeForm: FormGroup = new FormGroup({
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

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.employeesService.getEmployee(params['id']).subscribe(employee => {
        this.employeeForm.setValue({
          'employee_id': employee[0].employee_id,
          'first_name': employee[0].first_name,
          'last_name': employee[0].last_name,
          'email': employee[0].email,
          'phone_number': employee[0].phone_number,
          'hire_date': employee[0].hire_date.substring(0, 10),
          'job_id': employee[0].job_id,
          'salary': employee[0].salary,
          'commission_pct': employee[0].commission_pct,
          'manager_id': employee[0].manager_id,
          'department_id': employee[0].department_id,
        });
      });
    });
  }

  putForm(form: Employee) {
    this.employeesService.putEmployee(form).subscribe(
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
