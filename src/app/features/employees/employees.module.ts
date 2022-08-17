import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { ReadComponent } from './components/read/read.component';
import { SharedModule } from '../../shared/shared.module';
import { EmployeesRoutingModule } from './employees-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesService } from './service/employees.service';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesFormComponent,
    EmployeesListComponent,
    ReadComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeesRoutingModule,
    NgxPaginationModule,
  ],
  providers: [EmployeesService],
})
export class EmployeesModule {}
