import { ProductsService } from './../../services/products/products.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddProductRoutingModule } from './add-product-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    // tslint:disable-next-line: deprecation
    HttpModule
  ],
  providers: [
    ProductsService
  ],
  entryComponents: [
  ]
})
export class AddProductModule { }
