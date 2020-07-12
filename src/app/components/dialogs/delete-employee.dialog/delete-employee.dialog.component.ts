import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../../../models/employee";

@Component({
  selector: 'app-delete-employee.dialog',
  templateUrl: './delete-employee.dialog.component.html',
  styleUrls: ['./delete-employee.dialog.component.scss']
})
export class DeleteEmployeeDialogComponent {

  constructor(private dialogRef: MatDialogRef<DeleteEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public employee: Employee) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {}
}
