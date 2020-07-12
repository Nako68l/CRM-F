import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private readonly API_PREFIX = '/api'
  private readonly API_FEATURE = this.API_PREFIX + '/employees'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_FEATURE)
  }

  addOne(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.API_FEATURE, employee);
  }

  remove(employee: Employee): Observable<Employee> {
    return this.http.delete<Employee>(this.API_FEATURE + `/${employee._id}`)
  }
}
