import { AuthService } from './../auth/auth.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGaurdService } from './auth-gaurd.service';

describe('AuthGaurdService', () => {
  let service: AuthGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        // tslint:disable-next-line: deprecation
        HttpModule,
        RouterModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        AuthService
      ]
    });
    service = TestBed.inject(AuthGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
