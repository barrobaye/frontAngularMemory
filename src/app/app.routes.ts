import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',loadChildren: () => import ('./pages/public/public.module').then(m => m.PublicModule)},
   // {path:'dashboard',loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)},
  //  {path:'**',loadChildren: () => import ('./notfound/notfound.module').then(m => m.NotfoundModule)},




];
