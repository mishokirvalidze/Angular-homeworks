import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class SalaryGuard implements CanActivate {
  constructor(private rout: Router, private service: SharedService) {}

  canActivate(): boolean {
    if (this.service.isRich()) {
      return true;
    }
    this.rout.navigateByUrl('/users');
    return false;
  }
}
