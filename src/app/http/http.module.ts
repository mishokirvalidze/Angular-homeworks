import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadComponent } from './components/read/read.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HttpComponent,
    EmployeesComponent,
    FormComponent,
    ReadComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class HttpModule {}
