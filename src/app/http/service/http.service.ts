import { Injectable } from '@angular/core';
import { AddedEmployee, Iemployee } from '../model/http.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/employees/';

  public postEmployee(data: Iemployee): void {
    this.http.post<AddedEmployee>(this.baseUrl, data).subscribe();
  }

  public getEmployees(): Observable<AddedEmployee[]> {
    return this.http
      .get<AddedEmployee[]>(this.baseUrl)
      .pipe(tap((data) => data as unknown as AddedEmployee[]));
  }

  public getEmployee(id: string): Observable<AddedEmployee> {
    return this.http.get<AddedEmployee>(this.baseUrl + id);
  }

  public deleteEmployee(id: string): void {
    this.http.delete(this.baseUrl + id).subscribe();
  }
}
