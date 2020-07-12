import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee";
import {Observable} from "rxjs";
import {API_PREFIX} from "../enums/constants";

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private readonly API_FEATURE = API_PREFIX + '/employees'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_FEATURE)
  }

  addOne(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.API_FEATURE, employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.API_FEATURE}/${employee._id}`, employee);
  }

  remove(employee: Employee): Observable<Employee> {
    return this.http.delete<Employee>(`${this.API_FEATURE}/${employee._id}`)
  }
}
