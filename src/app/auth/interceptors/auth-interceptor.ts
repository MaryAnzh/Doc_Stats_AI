import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/tokenService';
import { RefreshService } from '../services/refresh-service';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const tokens = inject(TokenService);
  const refresh = inject(RefreshService);

  const token = tokens.getAccessToken();

  const authReq = token
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      })
    : req;

  return next(authReq).pipe(
    catchError((err) => {
      if (err.status === 401 && tokens.getTokens()) {
        return refresh.refresh(tokens.getTokens()!.refreshToken).pipe(
          switchMap((newTokens) => {
            tokens.setTokens(newTokens);

            const retryReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newTokens.accessToken}` },
            });

            return next(retryReq);
          }),
          catchError(() => {
            tokens.clear();
            return throwError(() => err);
          }),
        );
      }

      return throwError(() => err);
    }),
  );
};
