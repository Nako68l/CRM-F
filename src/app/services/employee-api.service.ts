import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private readonly API_PREFIX = '/api'

  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.API_PREFIX+ '/employees', employee);
  }
}
