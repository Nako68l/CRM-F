import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthCreds, RegistrationCreds} from "../../models/registration-creds";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm = new FormControl('', [Validators.required]);
  registrationForm = new FormControl('', [Validators.required]);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onLogin(creds: AuthCreds) {
    console.log('login', creds);
    this.authService.login(creds).subscribe(() => {
        alert('success')
        this.router.navigateByUrl('')
      },
      err => {
        console.warn(err);
        alert('Login failed')
      })
  }

  onRegister(creds: RegistrationCreds) {
    if (creds.password !== creds.passwordConfirmation) {
      return alert('Passwords do not match')
    }
    const {passwordConfirmation, ...userCreds} = creds
    this.authService.register(userCreds).subscribe(() => {
        this.router.navigateByUrl('')
      },
      (err: HttpErrorResponse) => {
        alert('Registration failed\n' + err.error.message)
      })
  }
}
