import { AuthService } from './../../services/auth/auth.service';
import { EditComponent } from './edit/edit.component';
import { DelDialogComponent } from './del-dialog/del-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Products } from './../../common/products';
import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/common/common-listing';
import { Cart } from 'src/app/common/users';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsSearch: FormGroup;
  searchBy = '1';

  searchByList: CommonListing[] = [
    { value: '0', viewValue: 'Manufacturer' },
    { value: '1', viewValue: 'Product Name' }
  ];

  productsFilteredData: Products[] = [];
  productsData: any[];
  cart: Cart = {
    productID: '',
    productName: '',
    quantity: '',
    price: '',
  };

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private dialog: MatDialog,
    private user: UserService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.productsSearch = this.fb.group({
      input: [''],
    });
    this.productService.getProductInventory().subscribe((res: any) => {
      this.productsData = res.json();
      this.productsFilteredData = res.json();
    }, (err: Response) => {
      console.log(err);
    });
    console.log(this.productsFilteredData);
  }

  onSearch() {
    const searchInput: string = this.productsSearch.value.input;
    if (this.searchBy === '0') {
      this.productsFilteredData = this.productsData.filter((searchByManufacturer: Products) =>
        searchByManufacturer.manufacturer.toLowerCase() === searchInput.toLowerCase());
    }
    if (this.searchBy === '1') {
      this.productsFilteredData = this.productsData.filter((search: Products) =>
        search.productName.toLowerCase() === searchInput.toLowerCase());
    }
  }

  clearSearchInput() {
    this.productsSearch.reset();
    this.ngOnInit();
  }

  onDelete(post: any) {
    const dialogRef = this.dialog.open(DelDialogComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data === 'y') {
        this.productService.deletePost(post).subscribe(res => {
          console.log(res);
          this.ngOnInit();
        }, (err: Response) => {
          console.log(err.status);
        });
      }
    });
  }

  onUpdate(item: any) {
    const dailogRef = this.dialog.open(EditComponent, {
      width: '1000px',
      data: item
    });
    dailogRef.afterClosed().subscribe(data => {
      if (!data) {
        return;
      }

      data.id = item.id;
      this.productService.update(data).subscribe(res => {
        console.log(res.json());
      }, (err: Response) => {
        console.log(err);
      });
      this.ngOnInit();
    });
  }

  addToCart(detail: any) {
    const id = localStorage.getItem('userID');
    this.cart = {
      productID: detail.id,
      productName: detail.productName,
      quantity: '1',
      price: detail.price
    };
    this.user.addToCart(this.cart, id).subscribe(res => {
      console.log(res.json());
    });
  }

}
