import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-circle-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.css']
})
export class CircleChartComponent {
circleChartData: ChartData <"pie"> = {
  labels: ['Recruteurs', 'Travailleurs'],
  datasets: [{ data: [4500, 9800],
  backgroundColor: ['#6857E6', '#009FEE'],  
  },
  
  ]
}

  // options
 // circleChartDataOptions = {
   // responsive: true,
    //maintainAspectRatio: false
  
//}
}
