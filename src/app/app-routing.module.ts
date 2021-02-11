import { AddProductGuardServiceService } from './services/add-product-guard-service/add-product-guard-service.service';
import { AuthGaurdService } from './services/auth-guard/auth-gaurd.service';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthUserGuardService } from './services/auth-user-guard/auth-user-guard.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./modules/add-product/add-product.module').then(m => m.AddProductModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'sales-chart',
    loadChildren: () => import('./modules/sales-chart/sales-chart.module').then(m => m.SalesChartModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'my-account',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate: [AuthUserGuardService]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
