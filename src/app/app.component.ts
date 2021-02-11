import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from './modules/user/registration/registration.component';
import { LoginComponent } from './modules/user/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cart = 0;
  noOfItems: any;

  constructor(
    private dialog: MatDialog,
    public auth: AuthService,
    public user: UserService,
    private router: Router
  ) {
    const id = localStorage.getItem('userID');
    if (id == null || id === '') {
      localStorage.setItem('cart', '0');
    }
  }

  openLoginDialog() {
    const dialog = this.dialog.open(LoginComponent, {
      width: '400px'
    });
  }
  openRegDialog() {
    const dialog = this.dialog.open(RegistrationComponent, {
      width: '1000px',
      height: '500px'      // maxHeight: '1000px'
    });
  }
  onLogout() {
    this.auth.logout();
    this.router.navigate(['home']);
  }
  goToMyAccount() {
    this.router.navigate(['my-account']);
  }
  goToSalesChart() {
    this.router.navigate(['sales-chart']);
  }

}
