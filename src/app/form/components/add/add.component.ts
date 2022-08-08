import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormType, User } from '../../model/user.model';
import { FormService } from '../../service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  checked = false;

  formGroup = new FormGroup<FormType>({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9]*'),
      Validators.minLength(7),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9]*'),
      Validators.minLength(7),
    ]),
    nickname: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9-]*'),
      Validators.minLength(3),
    ]),
    phoneNumber: new FormControl('', [
      Validators.pattern(
        /^\+?([995]{3})\s[0-9]{2,3}\-[0-9]{3}\-[0-9]{3}(?:x.+)?$/
      ),
      Validators.required,
    ]),
    website: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
      ),
    ]),
    check: new FormControl('', Validators.required),
  });

  constructor(private userService: FormService, private router: Router) {}

  ngOnInit(): void {}

  public add(): void {
    this.userService.usersList.push(<User>this.formGroup.value);
    this.router.navigate(['/form/user']);
  }

  check(event: Event): void {
    if ((<HTMLInputElement>event.target).checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
}