import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateStudentFormComponent } from './update-student-form.component';

describe('UpdateStudentFormComponent', () => {
  let component: UpdateStudentFormComponent;
  let fixture: ComponentFixture<UpdateStudentFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStudentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
