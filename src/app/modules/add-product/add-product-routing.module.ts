import { AddProductGuardServiceService } from './../../services/add-product-guard-service/add-product-guard-service.service';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AddProductComponent,
    canDeactivate: [AddProductGuardServiceService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductRoutingModule { }
