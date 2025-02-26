import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, switchMap, catchError, of } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.getAccessToken();
  let authReq = req;

  // ✅ Attach Access Token if available
  if (accessToken) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` }
    });
  }

  return next(authReq).pipe(
    catchError(error => {
      if (error.status === 401) { // 🔴 Unauthorized: Token might be expired
        return authService.refreshToken().pipe(
          switchMap(newToken => {
            if (!newToken) {
              authService.logout();
              return of(error);
            }

            // ✅ Retry the request with the new token
            authReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newToken.access}` }
            });
            return next(authReq);
          })
        );
      }
      return of(error);
    })
  );
};
