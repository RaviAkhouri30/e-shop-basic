import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  fakeApi = 'http://localhost:3000/products';
  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  addProduct(post: any) {
    return this.http.post(this.fakeApi, post);
  }

  getProductInventory() {
    return this.http.get(this.fakeApi);
  }

  deletePost(post: any) {
    return this.http.delete(this.fakeApi + '/' + post.id, JSON.stringify(post));
  }

  update(post: any) {
    return this.http.patch(this.fakeApi + '/' + post.id, {
      productName: post.productName,
      quantity: post.quantity,
      manufacturer: post.manufacturer,
      price: post.price,
      desc: post.desc
    });
  }
  getUniqueDetails(id: string) {
    return this.http.get(this.fakeApi + '/' + id);
  }

  increaseViews(post: any, view: string) {
    console.log(view);
    return this.http.patch(this.fakeApi + '/' + post.id, {
      views: +view + +1
    });
  }

}
