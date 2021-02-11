import { ProductsService } from 'src/app/services/products/products.service';
import { ChartsModule } from 'ng2-charts';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { UserModule } from './modules/user/user.module';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SalesChartComponent } from './modules/sales-chart/sales-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundPageComponent,
    SalesChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    ProductsModule,
    CheckoutModule,
    MatDialogModule,
    UserModule,
    MatBadgeModule,
    MatMenuModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ChartsModule
  ],
  entryComponents: [
  ],
  providers: [
    AuthService,
    UserService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
