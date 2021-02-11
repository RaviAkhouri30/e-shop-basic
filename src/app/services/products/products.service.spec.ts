import { HttpModule } from '@angular/http';
import { ProductsService } from './products.service';
import { TestBed } from '@angular/core/testing';


describe('ProductsServiceService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
