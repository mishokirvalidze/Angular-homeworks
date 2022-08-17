import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iemployee, Iform } from '../../model/employees.model';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss'],
})
export class EmployeesFormComponent implements OnInit, OnDestroy {
  @Input() editForm = false;

  @Input() editEmployeeData: Iemployee = {
    name: '',
    age: 0,
    salary: 0,
  };

  @Output() editFormChange = new EventEmitter<boolean>();
  @Output() cancelForm = new EventEmitter<void>();
  @Output() addEmployee = new EventEmitter<Iemployee>();
  @Output() employeeUpdate = new EventEmitter<Iemployee>();

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

  ngOnInit(): void {
    setTimeout(() => {
      if (this.editForm) {
        this.form.patchValue(this.editEmployeeData);
      }
    }, 300);
  }

  ngOnDestroy(): void {
    this.form.reset();
    this.editForm = false;
    this.editFormChange.emit(this.editForm);
  }

  public cancel(): void {
    this.cancelForm.emit();
  }

  public addOrEdit(): void {
    this.editForm
      ? this.employeeUpdate.emit(this.form.value as Iemployee)
      : this.addEmployee.emit(this.form.value as Iemployee);
  }
}
