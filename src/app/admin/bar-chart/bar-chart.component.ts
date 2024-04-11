import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {
  data: ChartData<'bar'> ={
    labels:['Jan'],
    datasets :[
      {
        data: [1],
      },
    ],
   };
}
