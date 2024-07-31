import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from '../admin/bar-chart/bar-chart.component';
import { CircleChartComponent } from '../admin/circle-chart/circle-chart.component';
import { StatisDashboardComponent } from '../admin/statis-dashboard/statis-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatisDashboardComponent,BarChartComponent,CircleChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    
  }
 };
 

