import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {AddEmployeeDialogComponent} from "../dialogs/add-employee.dialog/add-employee.dialog.component";
import {DataService} from "../../services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {Employee} from "../../models/employee";
import {EmployeeApiService} from "../../services/employee-api.service";
import {merge, of} from "rxjs";
import {catchError, startWith, switchMap} from "rxjs/operators";
import {DeleteEmployeeDialogComponent} from "../dialogs/delete-employee.dialog/delete-employee.dialog.component";

@Component({
  selector: 'app-workers-dashboard',
  templateUrl: './workers-dashboard.component.html',
  styleUrls: ['./workers-dashboard.component.scss']
})
export class WorkersDashboardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['fullName', 'position', 'birthday', 'gender', 'contactInformation', 'salary', 'actions'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private employeeApiService: EmployeeApiService,
    private dataService: DataService,
    private dialog: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => this.employeeApiService.getAll()),
        catchError(() => of([]))
      ).subscribe(employees => this.dataSource.data = employees);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addEmployee() {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe((employee: Employee) => {
      if (!employee) return;
      this.employeeApiService.addOne(employee).subscribe( employee => {
        this.dataSource.data.push(employee);
        this.refreshTable();
      })
    });
  }

  editEmployee() {

  }

  removeEmployee(employee: Employee, index: number) {
    const dialogRef = this.dialog.open(DeleteEmployeeDialogComponent, {
      data: employee
    });

    dialogRef.afterClosed().subscribe(employee => {
      if (!employee) return;
      this.employeeApiService.remove(employee).subscribe(() => {
        this.dataSource.data.splice(index, 1);
        this.refreshTable();
      })
    });
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
}
