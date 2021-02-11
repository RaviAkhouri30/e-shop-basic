
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/userDetails';
  noOfItems: any;

  constructor(
    private http: Http) { }

  login(credential: any) {
    return this.http.get(this.url + '/' + credential.userID);
  }

  logout() {
    localStorage.removeItem('userID');
    localStorage.removeItem('UserName');
    localStorage.removeItem('Admin');
    localStorage.setItem('cart', '0');
  }

  isLoggedIn() {
    const userID = localStorage.getItem('userID');
    if (!userID) {
      return false;
    }
    return true;
  }

  getUserName() {
    const userName = localStorage.getItem('UserName');
    return userName;
  }

  isAdmin(): boolean {
    const Admin = localStorage.getItem('Admin');
    if (Admin === 'false') {
      return false;
    }
    return true;
  }

}
