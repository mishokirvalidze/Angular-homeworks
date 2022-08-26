import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employees.service';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
