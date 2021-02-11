import { User } from './../../common/users';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Cart } from './../../common/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private fakeUserApi = 'http://localhost:3000/userDetails';
  private user: User;
  public cart = 0;
  cartVal: Cart[] = [];

  constructor(
    private http: Http
  ) {
    this.getNoOfItems();
    this.getCartItems();
  }

  addNewUser(post: any) {
    return this.http.post(this.fakeUserApi, post);
  }

  getNoOfItemsInCart(id: string) {
    return this.http.get(this.fakeUserApi + '/' + id);
  }

  addToCart(data: Cart, userID: string) {
    this.cartVal.push(data);
    this.cart = this.cart + 1;
    const noOfItems = localStorage.getItem('cart');
    const newVal = +noOfItems + 1;
    // localStorage.removeItem('cart');
    localStorage.setItem('cart', String(newVal));
    return this.http.patch(this.fakeUserApi + '/' + userID, {
      cart: this.cartVal
    });
  }

  getNoOfItems() {
    const noOfItems = localStorage.getItem('cart');
    if (noOfItems === null || noOfItems === '') {
      return '0';
    }
    return noOfItems;
  }

  getCartItems() {
    const userID = localStorage.getItem('userID');
    this.http.get(this.fakeUserApi + '/' + userID).subscribe(res => {
      if (!res) {
        return;
      } else {
        this.cartVal = res.json().cart;
      }
      if (!this.cartVal || this.cartVal === null || this.cartVal === []) {
        this.cart = 0;
        return;
      }
      this.cart = this.cartVal.length + 1;
    });
  }

  getUserDetails() {
    const userID = localStorage.getItem('userID');
    return this.http.get(this.fakeUserApi + '/' + userID);
  }

}
