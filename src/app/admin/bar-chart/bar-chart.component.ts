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

    labels:['Jan',"Feb","March","April","June","July","Sept","Oct","Nov","Dec"],
    
    datasets :[
      {
        data: this.getSubs(), label:'Subs'
      },
      {
        data: this.getWatch(),  label:'Watchtime,'
      },
    ],
   };
   getSubs(){
    return [100 ,200,300,250,500,450,150,200,550,350,200,300];
   }
   getWatch(){
    return [120 ,250,200,350,550,500,250,150,500,40,200,300];
   }
   getTotalDemandes(){
    let sum = 0;
    this.getWatch().forEach(element => {
      sum += element;
    });
    return sum; 
   }
   getTotalUsers(){
    let sum = 0;
    this.getSubs().forEach(element => {
      sum += element;
    });
    return sum; 
   }

  // options
  dataOptions = {
    responsive: true,
    maintainAspectRatio: false
  
}
          
}
