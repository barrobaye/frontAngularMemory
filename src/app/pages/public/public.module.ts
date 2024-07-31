import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { NotfoundComponent } from '../../notfound/notfound.component';
import { AdminComponent } from '../../admin/admin/admin.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { AproposComponent } from './apropos/apropos.component';

 const routes : Routes = [
  {path:'', component:AcceuilComponent},
  {path:'Apropos', component:AproposComponent},
  {path:'dashboard', component:AdminComponent},
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
   {path:'**', component:NotfoundComponent}
  
];
 
@NgModule({
 
  providers: [provideCharts(withDefaultRegisterables())],
  declarations: [ 
   
  ],
  exports: [
    
  ],
  imports: [ 
    
    RouterModule.forChild(routes),
    CommonModule
    
  ]
})
export class PublicModule { }
