import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersDashboardComponent } from './workers-dashboard.component';

describe('WorkersDashboardComponent', () => {
  let component: WorkersDashboardComponent;
  let fixture: ComponentFixture<WorkersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
