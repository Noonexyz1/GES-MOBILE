import { Routes } from '@angular/router';
import {Layout} from './layout/layout';
import {Notfound} from './pages/notfound/notfound';
import {Pincode} from './pages/pincode/pincode';
import {Promocion} from './pages/promocion/promocion';
import {Dashboard} from './pages/dashboard/dashboard';
import {Grafica} from './pages/grafica/grafica';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Dashboard },
      { path: 'promociones', component: Promocion }
    ]
  },
  { path: 'pincode', component: Pincode },
  { path: 'notfound', component: Notfound },
  { path: 'grafica', component: Grafica },
  { path: '**', redirectTo: '/notfound' }
];
