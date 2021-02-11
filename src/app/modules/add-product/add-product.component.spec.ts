import { Products } from './../../common/products';
import { ProductsService } from './../../services/products/products.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';
import { CommonModule } from '@angular/common';
import { AddProductRoutingModule } from './add-product-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpModule } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
// import { ProductsService } from 'src/app/ser vices/products/products.service';

class MockProductService {
  products: BehaviorSubject<Products[]> = new BehaviorSubject<Products[]>([
    {
      productName: 'Galaxy M30s',
      manufacturer: 'Samsung',
      quantity: '10',
      price: '13999.00',
      desc: 'Mega Monster',
      upload: 'C:\\fakepath\\GIB.png',
      id: 'dc7ffeaf-4b20-461a-b955-349d2a41012f',
      views: '18',
      purchased: '0'
    },
    {
      productName: 'Galaxy M31',
      manufacturer: 'Samsung',
      quantity: '10',
      price: '15999',
      desc: 'Mega Monster',
      upload: 'C:\\fakepath\\GIB.png',
      id: '9d4b8360-7276-4c61-807e-1ae8b57001e4',
      views: '38',
      purchased: '0'
    }
  ]);
  addProduct(product: Products) {
    const temp = this.products.getValue();
    temp.push(product);
    this.products.next(temp);
  }
}

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        AddProductRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        // tslint:disable-next-line: deprecation
        HttpModule,
        HttpClientModule
      ],
      providers: [
        { provide: ProductsService, useClass: MockProductService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a text box to accept product name`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=productName]');
    expect(myField).toBeTruthy();
  });
  it(`should render a text box to accept Manufacturer name`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=manufacturer]');
    expect(myField).toBeTruthy();
  });
  it(`should render a text box to accept Quantity`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=quantity]');
    expect(myField).toBeTruthy();
  });
  it(`should render a text box to accept price`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('input[formControlName=price]');
    expect(myField).toBeTruthy();
  });
  it(`should render a text area to accept Description`, () => {
    const compiled = fixture.nativeElement;
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector('textarea[formControlName=desc]');
    expect(myField).toBeTruthy();
  });
  it(`should render Submit Button`, () => {
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

// describe('add-product unit testing', () => {
//   let component: AddProductComponent;
//   beforeEach(() => {
//     component = new AddProductComponent(
//       new FormBuilder()
//     );
//   });

//   it('should create a form with 6 controls', () => {
//     expect(component.addProductForm.value('productName')).toBe('');
//     // expect(component.addProductForm.contains('manufacturer')).toBeTruthy();
//     // expect(component.addProductForm.contains('quantity')).toBeTruthy();
//     // expect(component.addProductForm.contains('price')).toBeTruthy();
//     // expect(component.addProductForm.contains('desc')).toBeTruthy();
//     // expect(component.addProductForm.contains('upload')).toBeTruthy();
//   });

//   it('should make productName required', () => {
//     let control = component.addProductForm.get('productName');
//     control.setValue('');
//     expect(control.valid).toBeFalsy();
//   });
// });
