import { by, By } from 'protractor';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelDialogComponent } from './del-dialog.component';

describe('DelDialogComponent', () => {
  let component: DelDialogComponent;
  let fixture: ComponentFixture<DelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DelDialogComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render Warning Message`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('.heading');
    expect(myField.textContent).toContain('Are You Sure You Want to Delete this Item');
  });
  it(`should render Yes Button`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('button[id=yes]');
    expect(myField).toBeTruthy();
  });
  it(`should render No Button`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('button[id=no]');
    expect(myField).toBeTruthy();
  });

});
