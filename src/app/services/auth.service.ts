import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthCreds} from "../models/registration-creds";
import {API_PREFIX} from "../enums/constants";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken;
  private readonly API_FEATURE = API_PREFIX + '/auth'

  constructor(private http: HttpClient) { }

  login(creds: AuthCreds): Observable<any> {
    return this.http.post(this.API_FEATURE + '/login', creds)
      .pipe(tap(res => this.setAuthToken(res['accessToken'])));
  }

  register(creds: AuthCreds): Observable<any> {
    return this.http.post(this.API_FEATURE + '/register', creds)
      .pipe(tap(res => this.setAuthToken(res['accessToken'])));
  }

  private setAuthToken(authToken: string) {
    this.authToken = authToken;
    sessionStorage.setItem('accessToken', authToken);
  }

  getAuthToken() {
    return this.authToken || sessionStorage.getItem('accessToken')
  }
}
