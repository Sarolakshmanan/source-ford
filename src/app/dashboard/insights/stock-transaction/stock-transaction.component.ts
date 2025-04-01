import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stock-transaction',
  templateUrl: './stock-transaction.component.html',
  styleUrls: ['./stock-transaction.component.scss']
})
export class StockTransactionComponent {
  Highcharts = Highcharts;

  barChartOptions2: Highcharts.Options = {
    chart: {
      type: 'column', 
      backgroundColor: '#ffffff'
    },
    title: {
      text: 'Stock Transactions'
    },
    xAxis: {
      categories: ['Mouse', 'Keyboard'], 
      title: {
        text: 'Items'
      }
    },
    yAxis: {
      categories: ['2024-03-21', '2024-03-22', '2024-03-23'], 
      title: {
        text: 'Date'
      }
    },
    series: [
      {
        type: 'column',
        name: 'Take',
        data: [16, 17], // Mouse, Keyboard
        color: '#034b7b'
      },
      {
        type: 'column',
        name: 'Return',
        data: [12, 10], // Mouse, Keyboard
        color: '#43b8c2'
      },
      {
        type: 'column',
        name: 'Damaged',
        data: [8, 6], 
        color: '#fab04d'
      }
    ],
    credits: {
      enabled: false
    }
  };
}
