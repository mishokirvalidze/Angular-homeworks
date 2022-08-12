import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddedEmployee } from '../../model/http.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  @Input() listOfEmployees: AddedEmployee[] = [];

  @Input() showForm = false;
  @Input() readModal = false;

  @Output() getID = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit(): void {}

  public getId(clickData: string[]): void {
    this.getID.emit(clickData);
  }
}
