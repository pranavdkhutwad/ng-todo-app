import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginTitle: string = 'Login Form';
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  signIn() {
    this.router.navigate(['todo']);
  }
}
