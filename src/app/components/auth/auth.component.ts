import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {LoginCreds, RegistrationCreds} from "../../models/registration-creds";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  formControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    }
  }

  onLogin(value: LoginCreds) {
    console.log('login', value);
  }

  onRegister(value: RegistrationCreds) {
    console.log('register', value);
  }
}
