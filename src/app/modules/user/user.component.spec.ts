import { HttpModule } from '@angular/http';
import { UserService } from 'src/app/services/user/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { UserRoutingModule } from './user-routing.module';
import { ProductsService } from 'src/app/services/products/products.service';
import { AuthService } from 'src/app/services/auth/auth.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        UserRoutingModule,
        // tslint:disable-next-line: deprecation
        HttpModule
      ],
      providers: [
        ProductsService,
        AuthService,
        UserService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
