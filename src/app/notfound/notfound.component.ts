import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent  implements  OnInit{
  constructor(private location: Location) {}
  ngOnInit(): void {
    // throw new Error('Not found');
  }
  cancel(){
    this.location;
  }

}
