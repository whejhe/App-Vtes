import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.route').then( m => m.AUTH_ROUTE)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.route').then( m => m.MAIN_ROUTE)
  },
  {
    path:'admin',
    loadChildren: () => import('./pages/admin/admin.route').then( m => m.ADMIN_ROUTE)
  }
];
