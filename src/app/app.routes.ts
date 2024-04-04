import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',loadChildren: () => import ('./pages/public/public.module').then(m => m.PublicModule)},
    {path:'',loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)},



];
