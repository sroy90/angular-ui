import { TestBed } from '@angular/core/testing';

import { UserEmpService } from './user-emp.service';

describe('UserEmpService', () => {
  let service: UserEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
