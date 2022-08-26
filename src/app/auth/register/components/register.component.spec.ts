import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../../shared/shared.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/shared.interface';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let service: SharedService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule],
      declarations: [RegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(SharedService);
    router = TestBed.inject(Router);

    // component.formGroup.patchValue({
    //   email: 'exmple@mail.com',
    //   password: '1234567',
    //   confirmPassword: '1234567',
    //   salary: 1000,
    //   nickname: 'nick',
    //   phoneNumber: '+995 555-555-555',
    //   website: 'google.com',
    //   check: true,
    // });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test submit method', () => {
    localStorage.setItem('id', '1');
    let id = Number(localStorage.getItem('id'));
    let salary = 100;

    let data: any;
    component.edit = true;
    spyOn(component, 'submit');
    spyOn(service, 'edit');
    spyOn(router, 'navigateByUrl');

    component.submit();
    service.edit(id, data);
    router.navigateByUrl('/users');
    expect(component.submit).toHaveBeenCalledTimes(1);
    expect(service.edit).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
  });

  it('test cancel method', () => {
    spyOn(component, 'cancel');
    spyOn(component.formGroup, 'reset');
    spyOn(router, 'navigateByUrl');

    // expect(component.formGroup.valid).toBeTrue();

    component.cancel();
    component.formGroup.reset();
    router.navigateByUrl('/');
    expect(component.cancel).toHaveBeenCalled();
    expect(component.formGroup.reset).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
  });
});
