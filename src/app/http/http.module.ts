import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HttpComponent, EmployeesComponent, FormComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
})
export class HttpModule {}
