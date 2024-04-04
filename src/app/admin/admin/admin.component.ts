import { Component, OnInit } from '@angular/core';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { SiderNavComponent } from '../sider-nav/sider-nav.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderNavComponent,SiderNavComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent  implements OnInit{
  constructor() {}
  ngOnInit(): void {
    
  }
}
