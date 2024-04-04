import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { NotfoundComponent } from '../../notfound/notfound.component';
 const routes : Routes = [
  {path:'acceuil', component:AcceuilComponent},
 // {path:'**', component:NotfoundComponent}
];
 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    
  ]
})
export class PublicModule { }
