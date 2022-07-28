import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormType, User } from 'src/app/model/user.model';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private userService: AppService
  ) {}

  private index: number = 0;

  private editData: User = {
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    phoneNumber: '',
    website: '',
  };

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((user) => {
      this.editData = <User>user;
    });

    this.formGroup.patchValue(this.editData);

    this.userService.usersList.forEach((user, index) => {
      if (user.email === this.editData.email) {
        this.index = index;
      }
    });
  }

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
        /^\+[0-9]{1,3}\s[0-9]{2,3}\-[0-9]{3}\-[0-9]{3}(?:x.+)?$/
      ),
      Validators.required,
    ]),
    website: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
      ),
    ]),
  });

  public edit(): void {
    this.userService.usersList.splice(
      this.index,
      1,
      <User>this.formGroup.value
    );

    this.route.navigate(['/']);
  }
}
