import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }

  getEmployee(id: number) {
    return this.http.get<Employee[]>(`${this.url}/employee/${id}`);
  }

  postEmployee(employee: Employee) {
    return this.http.post(`${this.url}/employee`, employee);
  }

  putEmployee(employee: Employee) {
    return this.http.put(`${this.url}/employee`, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.url}/employee/${id}`);
  }
}

export interface Employee {
  "employee_id": number,
  "first_name": string,
  "last_name": string,
  "email": string,
  "phone_number": string,
  "hire_date": string,
  "job_id": string,
  "salary": number,
  "commission_pct": number,
  "manager_id": number,
  "department_id": number
}