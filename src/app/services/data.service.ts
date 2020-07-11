import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Employee} from '../models/employee';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'https://api.github.com/repos/angular/angular/issues';

  dataChange: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Employee[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  getAllEmployees(): void {
    this.httpClient.get<Employee[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  addEmployee (employee: Employee): void {
    this.dialogData = employee;
  }

  updateEmployee (employee: Employee): void {
    this.dialogData = employee;
  }

  deleteEmployee (id: number): void {
    console.log(id);
  }
}



