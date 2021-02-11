import { TestBed } from '@angular/core/testing';

import { AddProductGuardServiceService } from './add-product-guard-service.service';

describe('AddProductGuardServiceService', () => {
  let service: AddProductGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProductGuardServiceService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
