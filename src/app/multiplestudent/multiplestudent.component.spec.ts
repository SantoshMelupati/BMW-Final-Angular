import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplestudentComponent } from './multiplestudent.component';

describe('MultiplestudentComponent', () => {
  let component: MultiplestudentComponent;
  let fixture: ComponentFixture<MultiplestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplestudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
