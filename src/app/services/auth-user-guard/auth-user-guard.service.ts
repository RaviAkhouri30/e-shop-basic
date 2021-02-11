import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (!this.auth.isAdmin() && this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }
}
