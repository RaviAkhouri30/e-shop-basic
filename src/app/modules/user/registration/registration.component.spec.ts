import { MatDialogRef } from '@angular/material/dialog';
import { HttpModule } from '@angular/http';
import { UserService } from 'src/app/services/user/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        // tslint:disable-next-line: deprecation
        HttpModule
      ],
      providers: [
        UserService,
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a text Box for First Name`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=fName]');
    expect(myField).toBeTruthy();
  });

  it(`should render a text Box for Last Name`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=lName]');
    expect(myField).toBeTruthy();
  });

  it(`should render a text Box for Email ID`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=email]');
    expect(myField).toBeTruthy();
  });

  it(`should render a text Box for Mobile Number`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=mob]');
    expect(myField).toBeTruthy();
  });

  it(`should render a text Box for Password`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=password]');
    expect(myField).toBeTruthy();
  });

  it(`should render a text Box for Confirm Password`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=cPassword]');
    expect(myField).toBeTruthy();
  });
  it(`should render a text Box for Address Line 1`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=addLine1]');
    expect(myField).toBeTruthy();
  });
  it(`should render a text Box for City`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=city]');
    expect(myField).toBeTruthy();
  });
  it(`should render a text Box for State`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=state]');
    expect(myField).toBeTruthy();
  });
  it(`should render a text Box for Pincode`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=pinCode]');
    expect(myField).toBeTruthy();
  });
  it(`should render a Submit Button`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('button[type=submit]');
    expect(myField).toBeTruthy();
  });
  it(`should render Reset Button`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('button[color=warn]');
    expect(myField).toBeTruthy();
  });

});
