import { TestBed } from '@angular/core/testing';

import { MultiplestudentService } from './multiplestudent.service';

describe('MultiplestudentService', () => {
  let service: MultiplestudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplestudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
