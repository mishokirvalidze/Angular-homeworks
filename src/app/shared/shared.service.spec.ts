import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SharedService', () => {
  let service: SharedService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [SharedService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(SharedService);
    router = TestBed.inject(Router);

    localStorage.setItem('token', 'token');
    localStorage.setItem('id', 'id');
    localStorage.setItem('salary', '500');
  });

  // afterEach(() => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('id');
  //   localStorage.removeItem('salary');

  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test logOut method', () => {
    spyOn(service, 'logOut');
    spyOn(router, 'navigateByUrl');
    service.logOut();
    router.navigateByUrl('./login');
    expect(service.logOut).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
  });

  it('test isRich method', () => {
    spyOn(service, 'isRich');
    service.isRich();
    expect(service.isRich).toHaveBeenCalledTimes(1);
  });
});
