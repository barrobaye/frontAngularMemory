import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../base/header/header.component';
import { FooterComponent } from '../../../base/footer/footer.component';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent  implements OnInit{
  constructor() {}
  ngOnInit(): void {
    
  }
}
