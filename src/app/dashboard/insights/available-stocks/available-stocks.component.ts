import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-available-stocks',
  templateUrl: './available-stocks.component.html',
  styleUrls: ['./available-stocks.component.scss'],
})
export class AvailableStocksComponent {
  Highcharts = Highcharts;
  barChartOptions1: Highcharts.Options = {
    chart: {
      type: 'column', 
      backgroundColor: '#ffffff',
    },
    title: {
      text: 'Available Stocks',
    },
    xAxis: {
      categories: ['Mouse', 'Keyboard'],
      title: {
        text: 'Items',
      },
    },
    yAxis: {
      title: {
        text: 'Stock Levels',
      },
    },
    series: [
      {
        type: 'column',
        name: 'Total',
        data: [25, 20],
        color: '#002f5d',
      },
      {
        type: 'column',
        name: 'Availability',
        data: [15, 10],
        color: '#519de7',
      },
      {
        type: 'column',
        name: 'Consumed',
        data: [10, 8], // Mouse, Keyboard
        color: '#004b96',
      },
    ],
    credits: {
      enabled: false,
    },
  };
}
