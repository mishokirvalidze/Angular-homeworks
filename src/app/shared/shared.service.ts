import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, tap } from 'rxjs';
import { IloginForm, User, AuthObject, ReturnedUser } from './shared.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient, private router: Router) {}

  baseUrl = 'http://localhost:3000';

  error = new BehaviorSubject<string>('');

  public loginRegister(data: IloginForm | User, endPoint: string): void {
    this.http
      .post<AuthObject>(this.baseUrl + endPoint, data)
      .pipe(
        tap((data) => {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('id', (data.user as ReturnedUser).id.toString());
          localStorage.setItem(
            'salary',
            (data.user as ReturnedUser).salary.toString()
          );

          this.router.navigate(['/users']);
        }),
        catchError((err: HttpErrorResponse) => {
          this.error.next(err.error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  public logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('salary');
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public isRich(): boolean {
    if (Number(localStorage.getItem('salary')) >= 400) {
      return true;
    }

    return false;
  }
}
