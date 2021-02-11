import { UserRoutingModule } from './user-routing.module';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './../../services/auth/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from 'src/app/services/products/products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    UserRoutingModule
  ],
  entryComponents: [
    RegistrationComponent,
    LoginComponent
  ],
  providers: [
    ProductsService,
    AuthService
  ]
})
export class UserModule { }
