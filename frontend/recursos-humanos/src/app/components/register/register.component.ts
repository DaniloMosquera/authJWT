import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, UsersService } from '../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router, private usersService: UsersService) { }

  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  register(user: User) {
    const input = document.getElementById('repeatPassword') as HTMLInputElement;
    const value = input.value;

    if (value == user.password) {
      this.usersService.register(user).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error al obtener datos desde el backend:', error);
        }
      );
    }

  }

  back() {
    this.router.navigate(['/form']);
  }


}
