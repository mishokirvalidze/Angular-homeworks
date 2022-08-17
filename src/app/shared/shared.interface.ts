import { FormControl } from '@angular/forms';

export interface IloginForm {
  email: string;
  password: string;
}

export interface IloginFormControls {
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface User extends IloginForm {
  confirmPassword: string;
  nickname: string;
  phoneNumber: string;
  salary: number;
  website: string;
}

export interface RegisterUser extends User {
  id: number;
}

export interface AuthObject {
  accessToken: string;
  user: object;
}

export interface ReturnedUser {
  email: string;
  nickname: string;
  phoneNumber: string;
  salary: number;
  website: string;
  id: number;
}
