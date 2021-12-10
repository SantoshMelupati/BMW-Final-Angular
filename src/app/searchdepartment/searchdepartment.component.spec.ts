import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdepartmentComponent } from './searchdepartment.component';

describe('SearchdepartmentComponent', () => {
  let component: SearchdepartmentComponent;
  let fixture: ComponentFixture<SearchdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
