import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';
import { AddedEmployee, Iemployee } from './model/http.model';
import { tap } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  showForm = false;

  public employees: AddedEmployee[] = [];

  employee: Iemployee = {
    name: '',
    age: 0,
    salary: 0,
  };

  constructor(private ser: HttpService) {}

  ngOnInit(): void {
    this.update();
  }

  private update(): void {
    this.ser
      .getEmployees()
      .pipe(tap((data) => (this.employees = data)))
      .subscribe();
  }

  public delete(id: string): void {
    this.ser.deleteEmployee(id);
    this.update();
  }

  public post(employee: Iemployee): void {
    this.ser.postEmployee(employee);
    this.update();
  }

  public add(employeeData: Iemployee): void {
    this.employee = employeeData;
    this.post(employeeData);
    this.cancel();
    this.update();
  }

  public edit(id: string): void {
    this.ser
      .getEmployee(id)
      .pipe(
        tap((employeeData) => {
          this.employee = employeeData;
        })
      )
      .subscribe();
  }

  public cancel(): void {
    this.showForm = !this.showForm;
  }
}
