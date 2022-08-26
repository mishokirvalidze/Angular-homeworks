import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../../shared/shared.service';
import { Router } from '@angular/router';
import { IloginForm } from '../../../shared/shared.interface';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: SharedService;
  let router: Router;

  let data: IloginForm = {
    email: 'admin@mail.com',
    password: 'admin',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(SharedService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit method', () => {
    spyOn(component, 'ngOnInit');
    spyOn(service, 'isLoggedIn');
    spyOn(router, 'navigateByUrl');
    component.ngOnInit();
    service.isLoggedIn();
    router.navigateByUrl('/users');
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
    expect(service.isLoggedIn).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
  });

  it('test submit method', () => {
    spyOn(component, 'submit');
    spyOn(service, 'loginRegister');
    component.submit();

    service.loginRegister(data, '/login');
    expect(component.submit).toHaveBeenCalledTimes(1);
    expect(service.loginRegister).toHaveBeenCalledTimes(1);
  });
});
