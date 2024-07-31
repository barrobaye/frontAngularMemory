import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

constructor (){}
ngOnInit() {   
}
items: {
  title?:string;
  link?: string;
} [] = [
  {title:'Acceuil',link: ''},
  { title:'A Propos',link: '/Apropos'},
  { title:'Services',link: 'service'},
  { title:'Prestation',link: 'prestation'},
];

}
