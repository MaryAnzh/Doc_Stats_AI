import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';

import { AUTH, DASHBOARD, LOGIN, REGISTER } from './shared/constants';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: DASHBOARD, redirectTo: '', pathMatch: 'full' },
  {
    path: AUTH,
    children: [
      {
        path: LOGIN,
        loadComponent: () =>
          import('../app/auth/pages/login-page/login-page').then((m) => m.LoginPageComponent),
      },
      {
        path: REGISTER,
        loadComponent: () =>
          import('../app/auth/pages/register-page/register-page').then(
            (m) => m.RegisterPageComponent,
          ),
      },
    ],
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found').then((c) => c.NotFoundPage),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
