import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Iemployee } from '../../model/http.model';

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
