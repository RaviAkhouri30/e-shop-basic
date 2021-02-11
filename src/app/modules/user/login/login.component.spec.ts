import { MatDialogRef } from '@angular/material/dialog';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserModule } from './../user.module';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        // { Provide: Http, useValue: {} }
      ]
    })
      .compileComponents();
  }));
  // platformBrowserDynamic().bootstrapModule(LoginComponent);
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a text Box for User Id`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=userID]');
    expect(myField).toBeTruthy();
  });
  it(`should render a text Box for Password`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=password]');
    expect(myField).toBeTruthy();
  });
  it(`should render a login Button`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('button[type=submit]');
    expect(myField).toBeTruthy();
  });
  it(`should render a Reset Button`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('button[color=warn]');
    expect(myField).toBeTruthy();
  });

});
