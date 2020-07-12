import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeDialogComponent } from './delete-employee.dialog.component';

describe('AddEmployee.DialogComponent', () => {
  let component: DeleteEmployeeDialogComponent;
  let fixture: ComponentFixture<DeleteEmployeeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
