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

  @Output() IdForEdit = new EventEmitter<string>();
  @Output() idForDelete = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public getIdForEdit(id: string): void {
    this.IdForEdit.emit(id);
  }

  public getIdForDelete(id: string): void {
    this.idForDelete.emit(id);
  }
}
