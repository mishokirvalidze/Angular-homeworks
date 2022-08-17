import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/shared.interface';
import { FormType } from '../model/register.model';
import { SharedService } from '../../../shared/shared.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    public service: SharedService
  ) {}

  checked = false;

  formGroup = new FormGroup<FormType>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern('[A-Za-z0-9]*'),
        Validators.minLength(7),
      ],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern('[A-Za-z0-9]*'),
        Validators.minLength(7),
      ],
    }),
    nickname: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern('[A-Za-z0-9-]*'),
        Validators.minLength(3),
      ],
    }),
    phoneNumber: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.pattern(
          /^\+?([995]{3})\s[0-9]{2,3}\-[0-9]{3}\-[0-9]{3}(?:x.+)?$/
        ),
        Validators.required,
      ],
    }),
    salary: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
    website: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(
          /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
        ),
      ],
    }),
    check: new FormControl('', {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });

  ngOnInit(): void {
    // if (this.service.isLoggedIn()) this.router.navigateByUrl('/users');
  }

  ngOnDestroy(): void {
    this.service.error.next('');
  }

  public submit(): void {
    this.service.loginRegister(this.formGroup.value as User, '/register');
  }
}
