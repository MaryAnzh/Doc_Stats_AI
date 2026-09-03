import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';

import { APP_ROUTES, DASHBOARD } from './shared/constants';
import { publicGuard } from './auth/guards/public-guard';
const { AUTH_LOGIN, AUTH_REGISTER, NOT_FOUND } = APP_ROUTES;

export const routes: Routes = [
  { path: APP_ROUTES.DASHBOARD, component: DashboardComponent, pathMatch: 'full' },
  { path: DASHBOARD, redirectTo: '', pathMatch: 'full' },
  {
    path: AUTH_LOGIN,
    canActivate: [publicGuard],
    loadComponent: () =>
      import('../app/auth/pages/login-page/login-page').then((m) => m.LoginPageComponent),
  },
  {
    path: AUTH_REGISTER,
    canActivate: [publicGuard],
    loadComponent: () =>
      import('../app/auth/pages/register-page/register-page').then((m) => m.RegisterPageComponent),
  },
  {
    path: NOT_FOUND,
    loadComponent: () => import('./not-found/not-found').then((c) => c.NotFoundPage),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
