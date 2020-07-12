import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthCreds} from "../models/registration-creds";
import {API_PREFIX} from "../constants/constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_FEATURE = API_PREFIX + '/auth'

  constructor(private http: HttpClient) { }

  login(creds: AuthCreds): Observable<any> {
    return this.http.post(this.API_FEATURE + '/login', creds);
  }

  register(creds: AuthCreds): Observable<any> {
    return this.http.post(this.API_FEATURE + '/register', creds);
  }
}
