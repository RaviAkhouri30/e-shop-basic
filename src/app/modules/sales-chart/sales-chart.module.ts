import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesChartRoutingModule } from './sales-chart-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SalesChartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalesChartModule { }
