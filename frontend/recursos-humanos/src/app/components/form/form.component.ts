import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  employees: Employee[] = [];

  constructor(private router: Router, private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(employee => {
      this.employees = employee;
    });

    for (let index = 0; index < this.employees.length; index++) {
      const boton = document.getElementById(`deleteButton${index}`);
      if (boton) {
        boton.setAttribute('data-bs-target', `deleteConfirm${index}`);
      }
    }
  }

  addEmployee() {
    this.router.navigate(['add']);
  }

  editEmployee(id: number) {
    this.router.navigate([`edit/${id}`]);
  }

  deleteEmployee(id: number) {
    console.log(`Eliminando el empleado ${id}`);
    this.employeesService.deleteEmployee(id).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }
}
