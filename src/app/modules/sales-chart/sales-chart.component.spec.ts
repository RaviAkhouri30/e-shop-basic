import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChartComponent } from './sales-chart.component';
import { CommonModule } from '@angular/common';
import { SalesChartRoutingModule } from './sales-chart-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SalesChartComponent', () => {
  let component: SalesChartComponent;
  let fixture: ComponentFixture<SalesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesChartComponent ],
      imports: [
        CommonModule,
        SalesChartRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        // tslint:disable-next-line: deprecation
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
