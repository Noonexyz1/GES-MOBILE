import { Routes } from '@angular/router';
import {Layout} from './layout/layout';
import {Notfound} from './pages/notfound/notfound';
import {Pincode} from './pages/pincode/pincode';

export const routes: Routes = [
  { path: '', component: Layout },
  { path: 'notfound', component: Notfound },
  { path: '**', redirectTo: '/notfound' }
];
