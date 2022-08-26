import { TestBed } from '@angular/core/testing';

import { SalaryGuard } from './salary.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

describe('SalaryGuard', () => {
  let guard: SalaryGuard;
  let service: SharedService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
    guard = TestBed.inject(SalaryGuard);
    service = TestBed.inject(SharedService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('test canActivate method', () => {
    spyOn(service, 'isRich');
    spyOn(guard, 'canActivate');
    guard.canActivate();
    service.isRich();
    expect(guard.canActivate).toHaveBeenCalledTimes(1);
    expect(service.isRich).toHaveBeenCalledTimes(1);
  });
});
