import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddedEmployee } from '../../model/employees.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  @Input() listOfEmployees: AddedEmployee[] = [];

  @Input() showForm = false;
  @Input() readModal = false;

  @Output() getID = new EventEmitter<string[]>();

  public page = 1;
  public count = 0;
  public numOfEmployee = 5;
  public employeeListSize = [5, 10, 15, 20];

  constructor() {}

  ngOnInit(): void {}

  public onPageChange(event: number): void {
    this.page = event;
  }

  public changeNum(event: Event): void {
    this.numOfEmployee = (event.target as HTMLSelectElement)
      .value as unknown as number;
  }

  public getId(clickData: string[]): void {
    this.getID.emit(clickData);
  }
}
