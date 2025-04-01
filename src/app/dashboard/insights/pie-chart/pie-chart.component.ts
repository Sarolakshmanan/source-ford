import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})export class PieChartComponent {
  Highcharts = Highcharts;
  chartOptions: any;

  constructor() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0, 
        plotShadow: false,
        type: 'pie' 
      },
      title: {
        text: 'Stock Transaction',
        style: {
          fontSize: '18px',
          fontWeight: 'bold'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          borderWidth: 0, 
          depth: 45,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f}%',
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#000'
            }
          }
        }
      },
      series: [{
        name: 'Products',
        data: [
          { name: 'Available', y: 21, color: '#B0C4DE' },
          { name: 'Damaged', y: 17, color: '#A9A9A9' },
          { name: 'Return', y: 14, color: '#708090' }
        ]
      }],
      credits: { enabled: false }
    };
  }
}
