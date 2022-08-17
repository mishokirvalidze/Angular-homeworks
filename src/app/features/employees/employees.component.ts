import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AddedEmployee, Iemployee } from './model/employees.model';
import { EmployeesService } from './service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  public showForm = false;

  public editForm = false;

  public readModal = false;

  private id = '';

  public employees: AddedEmployee[] = [];

  public employee: Iemployee = {
    name: '',
    age: 0,
    salary: 0,
  };

  constructor(private service: EmployeesService) {}

  ngOnInit(): void {
    this.update();
  }

  private update(): void {
    this.service
      .getEmployees()
      .pipe(tap((data) => (this.employees = data)))
      .subscribe();
  }

  public delete(id: string): void {
    this.service.deleteEmployee(id);
    setTimeout(() => {
      this.update();
    }, 400);
  }

  public post(employee: Iemployee): void {
    this.service.postEmployee(employee);
    this.cancel();
    setTimeout(() => {
      this.update();
    }, 400);
  }

  public getEmployeeData(id: string): void {
    this.service
      .getEmployee(id)
      .pipe(
        tap((employeeData) => {
          this.employee = employeeData;
        })
      )
      .subscribe();
  }

  public updateEmpl(employeeData: Iemployee) {
    this.service.updateEmployee(this.id, employeeData);
    this.cancel();
    setTimeout(() => {
      this.update();
    }, 400);
  }

  public cancel(): void {
    this.showForm = !this.showForm;
  }

  public read(id: string) {
    this.getEmployeeData(id);
    this.readModal = !this.readModal;
  }

  public closeRead() {
    this.readModal = !this.readModal;
  }

  public readEditDelete(clickData: string[]): void {
    if (clickData[1] === 'delete') {
      this.delete(clickData[0]);
    } else if (clickData[1] === 'edit') {
      this.id = clickData[0];
      this.getEmployeeData(clickData[0]);
      this.editForm = true;
      this.showForm = true;
    } else {
      this.read(clickData[0]);
    }
  }
}
