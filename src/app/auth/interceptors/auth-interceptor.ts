import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStore } from '../store/auth-store';
import { AuthService } from '../services/auth-service';
import { catchError, switchMap, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const store = inject(AuthStore);
  const auth = inject(AuthService);

  const token = store.accessToken();

  const authReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : req;

  return next(authReq).pipe(
    catchError((err) => {
      if (err.status === 401 && store.tokens()) {
        return auth.refresh(store.tokens()!.refreshToken).pipe(
          switchMap((tokens) => {
            store.setTokens(tokens);

            const retryReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${tokens.accessToken}`,
              },
            });

            return next(retryReq);
          }),
          catchError(() => {
            store.logout();
            return throwError(() => err);
          }),
        );
      }

      return throwError(() => err);
    }),
  );
};
