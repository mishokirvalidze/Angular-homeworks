import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { RegisterUser } from '../../../shared/shared.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  usersUrl = 'http://localhost:3000/users/';

  public getUsers(): Observable<RegisterUser[]> {
    return this.http
      .get<RegisterUser[]>(this.usersUrl)
      .pipe(tap((data) => data));
  }

  public deleteUser(id: number): void {
    this.http.delete(this.usersUrl + id).subscribe();
  }
}
