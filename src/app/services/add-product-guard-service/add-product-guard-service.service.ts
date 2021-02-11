import { AddProductComponent } from './../../modules/add-product/add-product.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddProductGuardServiceService implements CanDeactivate<AddProductComponent> {

  constructor(
    private dialog: MatDialog,
  ) { }

  canDeactivate(
    component: AddProductComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log(component.submitted, component.addProductForm.touched);
    if (!component.submitted && component.addProductForm.touched) {
      return confirm('Are You Sure You Want to Navigate Away from this Page');
    }
    return true;
  }
}
