import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private usersService: UsersService) { }

  userForm: FormGroup = new FormGroup({
    user_id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login(form: User) {

  }

  back() {
    this.router.navigate(['/form']);
  }

}
