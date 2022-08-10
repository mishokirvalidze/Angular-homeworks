import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
import { Iemployee, Iform } from '../../model/http.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() cancelForm = new EventEmitter<void>();
  @Output() addEmployee = new EventEmitter<Iemployee>();

  form = new FormGroup<Iform>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    age: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(16)],
    }),
    salary: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
  });

  constructor() {}

  ngOnInit(): void {}

  public cancel(): void {
    this.cancelForm.emit();
  }

  public add(): void {
    this.addEmployee.emit(this.form.value as Iemployee);
  }
}
