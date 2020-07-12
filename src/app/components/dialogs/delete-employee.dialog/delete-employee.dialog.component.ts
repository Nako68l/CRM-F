import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {DataService} from "../../../services/data.service";
import {Employee} from "../../../models/employee";
import {Gender} from "../../../../../../CRM-B/src/enums/gender.enum";
import {Position} from "../../../../../../CRM-B/src/enums/position.enum";

@Component({
  selector: 'app-delete-employee.dialog',
  templateUrl: './delete-employee.dialog.component.html',
  styleUrls: ['./delete-employee.dialog.component.scss']
})
export class DeleteEmployeeDialogComponent {

  constructor(private dialogRef: MatDialogRef<DeleteEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public employee: Employee,
              private dataService: DataService) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.dataService.deleteEmployee(this.employee._id);
  }
}
