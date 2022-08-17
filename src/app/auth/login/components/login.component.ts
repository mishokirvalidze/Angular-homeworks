import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../shared/shared.service';
import { Router } from '@angular/router';
import {
  IloginFormControls,
  IloginForm,
} from '../../../shared/shared.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup<IloginFormControls>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(public service: SharedService, private router: Router) {}

  ngOnInit(): void {
    if (this.service.isLoggedIn()) this.router.navigateByUrl('/users');
  }

  ngOnDestroy(): void {
    this.service.error.next('');
  }

  submit(): void {
    this.service.loginRegister(this.loginForm.value as IloginForm, '/login');
  }
}
