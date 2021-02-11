import { Cart } from './../../../common/users';
import { UserService } from './../../../services/user/user.service';
import { AuthService } from './../../../services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DelDialogComponent } from '../del-dialog/del-dialog.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  id: string;
  detail: any = [];
  cart: Cart = {
    productID: '',
    productName: '',
    quantity: '',
    price: '',
  };
  noOfItems: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private dialog: MatDialog,
    public auth: AuthService,
    private user: UserService
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.productService.getUniqueDetails(this.id).subscribe(res => {
      this.detail = res.json();
      this.changeNoOfViews(this.detail, this.detail.views);
    }, err => {
      console.log(err);
    });
  }

  changeNoOfViews(data, views) {
    this.productService.increaseViews(data, views).subscribe(res => {
      console.log(res);
    }, (err: Response) => {
      console.log(err);
    });
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
