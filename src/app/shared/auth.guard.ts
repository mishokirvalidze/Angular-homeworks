import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private shared: SharedService, private router: Router) {}

  canActivate(): boolean {
    if (this.shared.isLoggedIn()) {
      return true;
    }

    this.router.navigateByUrl('/login');

    return false;
  }
}
