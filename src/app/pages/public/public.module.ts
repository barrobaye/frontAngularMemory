import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from '../acceuil/acceuil.component';
 const routes : Routes = [
  {path:'acceuil', component:AcceuilComponent}
];
 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    
  ]
})
export class PublicModule { }
