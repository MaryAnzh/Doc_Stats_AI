import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../store/auth-store';
import { AUTH, LOGIN } from '../../shared';

export const authGuard: CanActivateFn = () => {
  const store = inject(AuthStore);
  const router = inject(Router);

  if (!store.isAuth()) {
    router.navigate([`${AUTH}/${LOGIN}`]);
    return false;
  }

  return true;
};
