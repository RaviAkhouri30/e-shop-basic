import { HttpModule } from '@angular/http';
import { ProductsService } from './../../../services/products/products.service';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { BehaviorSubject } from 'rxjs';
import { Products } from 'src/app/common/products';

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

describe('EditComponent', () => {
    let component: EditComponent;
    let fixture: ComponentFixture<EditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                MatDialogModule,
                // tslint:disable-next-line: deprecation
                HttpModule
            ],
            providers: [
                { provide: ProductsService, useClass: MockProductService },
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
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
