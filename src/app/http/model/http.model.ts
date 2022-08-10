import { FormControl } from '@angular/forms';
export interface Iemployee {
  name: string;
  age: number;
  salary: number;
}

export interface AddedEmployee extends Iemployee {
  id: string;
}

export interface Iform {
  name: FormControl<string>;
  age: FormControl<number>;
  salary: FormControl<number>;
}
