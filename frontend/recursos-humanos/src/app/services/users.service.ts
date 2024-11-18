import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  register(user: User) {
    return this.http.post(`${this.url}/user`, user);
  }

}

export interface User {
  "name": string,
  "email": string,
  "password": string,
}
