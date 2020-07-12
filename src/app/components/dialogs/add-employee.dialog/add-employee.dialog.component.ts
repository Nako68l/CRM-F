import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {DataService} from "../../../services/data.service";
import {Employee} from "../../../models/employee";
import {Gender} from "../../../../../../CRM-B/src/enums/gender.enum";
import {Position} from "../../../../../../CRM-B/src/enums/position.enum";

@Component({
  selector: 'app-add-employee.dialog',
  templateUrl: './add-employee.dialog.component.html',
  styleUrls: ['./add-employee.dialog.component.scss']
})
export class AddEmployeeDialogComponent {

  minBirthdayDate = this.getMinBirthdayDate();
  maxBirthdayDate = this.getMaxBirthdayDate();
  GENDERS = Object.values(Gender);
  POSITIONS = Object.values(Position);

  formControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private dialogRef: MatDialogRef<AddEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee,
              private dataService: DataService) {
    this.setDefaultValues()
  }

  private setDefaultValues(): void {
    this.data.gender = Gender.MALE
    this.data.salary = 0
  }

  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dataService.addEmployee(this.data);
  }

  private getMaxBirthdayDate(): Date {
    const ADULTHOOD_AGE = 18;
    const date = new Date();

    date.setFullYear( date.getFullYear() - ADULTHOOD_AGE);

    return date
  }

  private getMinBirthdayDate(): Date {
    const MAX_EMPLOYEE_AGE = 100;
    const date = new Date();

    date.setFullYear( date.getFullYear() - MAX_EMPLOYEE_AGE);

    return date
  }
}
