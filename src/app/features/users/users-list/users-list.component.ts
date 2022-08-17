import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { tap, BehaviorSubject } from 'rxjs';
import { ReturnedUser } from '../../../shared/shared.interface';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  constructor(
    private service: UsersService,
    private route: Router,
    public shared: SharedService
  ) {}

  user = new BehaviorSubject<ReturnedUser>({
    nickname: '',
    phoneNumber: '',
    salary: 0,
    website: '',
    email: '',
    id: 0,
  });

  id = 0;

  usersList: ReturnedUser[] = [];

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('id'));

    this.update();
  }

  public delete(id: number): void {
    if (confirm('Are you sure')) {
      this.service.deleteUser(id);
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('salary');
      this.route.navigateByUrl('/register');
    }
  }

  public update(): void {
    this.service
      .getUsers()
      .pipe(
        tap((data) => {
          this.usersList = data;
          data.forEach((item) => {
            if (item.id === this.id) {
              this.user.next(item as ReturnedUser);
            }
          });
        })
      )
      .subscribe();
  }

  public edit(): void {
    this.route.navigate(['/edit'], {
      queryParams: { edit: true },
    });
  }
}
