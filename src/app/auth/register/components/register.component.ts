import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/shared.interface';
import { FormType } from '../model/register.model';
import { SharedService } from '../../../shared/shared.service';
import { tap } from 'rxjs';
import { ReturnedUser } from '../../../shared/shared.interface';

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
    check: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });

  edit = false;

  ngOnInit(): void {
    this.activeRoute.queryParams
      .pipe(
        tap((data) => {
          if ((data as { edit: boolean }).edit) {
            this.edit = true;

            let userData: ReturnedUser = history.state;

            this.formGroup.patchValue({
              nickname: userData.nickname,
              website: userData.website,
              salary: userData.salary,
              email: userData.email,
              phoneNumber: userData.phoneNumber,
              check: true,
            });
          } else {
            if (this.service.isLoggedIn()) this.router.navigateByUrl('/users');
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.service.error.next('');
  }

  public submit(): void {
    let id = Number(localStorage.getItem('id'));

    let salary = this.formGroup.value.salary as unknown as string;

    if (this.edit) {
      this.service.edit(id, this.formGroup.value as ReturnedUser);

      localStorage.removeItem('salary');

      localStorage.setItem('salary', salary);

      this.router.navigateByUrl('/users');
    } else {
      this.service.loginRegister(this.formGroup.value as User, '/register');
    }
  }

  public cancel(): void {
    this.formGroup.reset();
    this.router.navigateByUrl('/');
  }
}
