import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentofcollegeComponent } from './departmentofcollege.component';

describe('DepartmentofcollegeComponent', () => {
  let component: DepartmentofcollegeComponent;
  let fixture: ComponentFixture<DepartmentofcollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentofcollegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentofcollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
