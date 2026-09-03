import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../store/auth-store';
import { DASHBOARD } from '../../shared';

export const publicGuard: CanActivateFn = () => {
  const store = inject(AuthStore);
  const router = inject(Router);

  if (store.isAuth()) {
    router.navigate([`/${DASHBOARD}`]);
    return false;
  }

  return true;
};
