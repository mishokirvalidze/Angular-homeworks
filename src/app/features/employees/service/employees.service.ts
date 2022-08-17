import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddedEmployee, Iemployee } from '../model/employees.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/employees/';

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
    this.http.delete<void>(this.baseUrl + id).subscribe();
  }

  public updateEmployee(id: string, updateData: Iemployee): void {
    this.http.put(this.baseUrl + id, updateData).subscribe();
  }
}
