import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private users: AppService) {}

  ngOnInit(): void {
    this.usersList = this.users.usersList;
  }

  usersList: User[] = [];

  delate(userData: User): void {
    this.usersList = this.usersList.filter((user) => user.id !== userData.id);
  }
}
