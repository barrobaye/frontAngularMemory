import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes : Routes = [
  {path:'dashboard', component:AdminComponent},

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    
  ]
})
export class AdminModule { }
