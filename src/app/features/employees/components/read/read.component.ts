import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iemployee } from '../../model/employees.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  @Input() readEmployee: Iemployee = {
    name: '',
    age: 0,
    salary: 0,
  };

  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onclose() {
    this.close.emit();
  }
}
