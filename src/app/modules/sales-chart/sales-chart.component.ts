import { Products } from './../../common/products';
import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Views' }
  ];

  products: Products[] = [];
  labelArray: string[] = [];
  views: number[] = [];
  constructor(
    private prodServ: ProductsService
  ) { }

  ngOnInit() {
    this.prodServ.getProductInventory().subscribe(res => {
      const data = res.json();
      this.products = data;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.products.length; i++) {
        this.labelArray.push(this.products[i].productName);
        this.views.push(Number(this.products[i].views));
      }
      this.barChartLabels = this.labelArray;
      this.barChartData = [
        { data: this.views, label: 'Views' }
      ];
    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
