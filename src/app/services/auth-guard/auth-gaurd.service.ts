import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate() {
    if (this.auth.isLoggedIn() && this.auth.isAdmin()) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }

}
