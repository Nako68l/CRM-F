import {Component, OnInit} from '@angular/core';
import {AuthCreds, RegistrationCreds} from "../../models/registration-creds";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  onLogin(creds: AuthCreds) {
    this.authService.login(creds).subscribe(() => {
        this.router.navigateByUrl('')
      },
      (err: HttpErrorResponse) => {
        this.toastr.error(err.error.message, 'Login failed')
      })
  }

  onRegister(creds: RegistrationCreds) {
    if (creds.password !== creds.passwordConfirmation) {
      return this.toastr.error('Passwords do not match', 'Registration failed')
    }
    const {passwordConfirmation, ...userCreds} = creds
    this.authService.register(userCreds).subscribe(() => {
        this.toastr.success('Your accout was created successfully')
        this.router.navigateByUrl('')
      },
      (err: HttpErrorResponse) => {
        this.toastr.error(err.error.message, 'Registration failed')
      })
  }
}
