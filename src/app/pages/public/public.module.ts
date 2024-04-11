import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { NotfoundComponent } from '../../notfound/notfound.component';
import { AdminComponent } from '../../admin/admin/admin.component';
import { BaseChartDirective, NG_CHARTS_CONFIGURATION } from 'ng2-charts';

 const routes : Routes = [
  {path:'', component:AcceuilComponent},
  {path:'dashboard', component:AdminComponent},
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
   {path:'**', component:NotfoundComponent}
  
];
 
@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forChild(routes),
    CommonModule
    
  ]
})
export class PublicModule { }
