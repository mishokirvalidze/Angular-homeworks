import { FormControl } from '@angular/forms';

export interface User {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  phoneNumber: string;
  website: string;
}

export interface FormType {
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  nickname: FormControl;
  phoneNumber: FormControl;
  website: FormControl;
  check?: FormControl;
}
