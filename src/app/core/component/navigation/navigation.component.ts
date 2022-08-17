import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  salary = new BehaviorSubject<number>(0);

  constructor(public service: SharedService) {}

  ngOnInit(): void {}

  public logout(): void {
    this.service.logOut();
  }
}
