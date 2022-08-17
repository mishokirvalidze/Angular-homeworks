import { FormControl } from '@angular/forms';
import { IloginFormControls } from 'src/app/shared/shared.interface';

export interface FormType extends IloginFormControls {
  confirmPassword: FormControl<string>;
  nickname: FormControl<string>;
  phoneNumber: FormControl<string>;
  salary: FormControl<number>;
  website: FormControl<string>;
  check?: FormControl<string>;
}
