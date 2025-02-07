import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {Employee} from "../../../models/employee";
import {EmployeePosition} from "../../../enums/position.enum";
import {Gender} from "../../../enums/gender.enum";

@Component({
  selector: 'app-add-employee.dialog',
  templateUrl: './add-employee.dialog.component.html',
  styleUrls: ['./add-employee.dialog.component.scss']
})
export class AddEmployeeDialogComponent {

  isEdit = false;
  minBirthdayDate = this.getMinBirthdayDate();
  maxBirthdayDate = this.getMaxBirthdayDate();
  GENDERS = Object.values(Gender);
  POSITIONS = Object.values(EmployeePosition);

  formControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private dialogRef: MatDialogRef<AddEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public employee: Employee) {
    this.isEdit = !!employee.fullName
    if(!this.isEdit) {
      this.setDefaultValues()
    }
  }

  private setDefaultValues(): void {
    this.employee.gender = Gender.MALE
    this.employee.salary = 0
  }

  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {}

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
