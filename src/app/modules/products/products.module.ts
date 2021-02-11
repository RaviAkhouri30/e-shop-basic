import { UserService } from './../../services/user/user.service';
import { AuthService } from './../../services/auth/auth.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ProductsService } from './../../services/products/products.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DelDialogComponent } from './del-dialog/del-dialog.component';
import { EditComponent } from './edit/edit.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

@NgModule({
  declarations: [ProductsComponent, DelDialogComponent, EditComponent, ViewDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule
  ],
  entryComponents: [
    DelDialogComponent,
    EditComponent,
  ],
  providers: [
    ProductsService,
    AuthService,
    UserService
  ]
})
export class ProductsModule { }
