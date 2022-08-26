import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  let service: SharedService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
    guard = TestBed.inject(AuthGuard);

    service = TestBed.inject(SharedService);
    router = TestBed.inject(Router);

    localStorage.setItem('token', 'token');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('test canActivate method', () => {
    spyOn(service, 'isLoggedIn').and.returnValue(false);
    spyOn(router, 'navigateByUrl');
    spyOn(guard, 'canActivate');
    service.isLoggedIn();
    router.navigateByUrl('/login');
    guard.canActivate();
    expect(guard.canActivate).toHaveBeenCalledTimes(1);
    expect(service.isLoggedIn).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
  });
});
