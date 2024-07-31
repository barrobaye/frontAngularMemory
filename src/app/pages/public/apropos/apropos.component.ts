import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../base/header/header.component';
import { FooterComponent } from '../../../../base/footer/footer.component';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    
  }
}
