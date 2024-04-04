import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-sider-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sider-nav.component.html',
  styleUrl: './sider-nav.component.css'
})
export class SiderNavComponent {
  items: {
    icon? : string;
    title?: string;
    link?: string;
  } [] = [
    {icon: 'team_dashboard', title: 'Dashboard', link: 'dashboard'},
    {icon: 'content_copy', title: 'Content', link: 'content'},
    {icon: 'pie_chart', title: 'Analytics', link: 'analytics'},
    {icon: 'chat', title: 'Comments', link: 'comments'},
  ];
}
