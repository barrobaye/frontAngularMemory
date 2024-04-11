import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { Chart } from 'chart.js/dist';
import { BarChartComponent } from '../admin/bar-chart/bar-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    
  }
 };
 

