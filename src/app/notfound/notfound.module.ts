import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'**', component:NotfoundComponent},
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class NotfoundModule { }
