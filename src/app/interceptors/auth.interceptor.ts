import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, switchMap, catchError, of } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.getAccessToken();

  // Para los endpoints que no requieren autenticación
  const publicUrls = [
    '/api/public-endpoint/',
  ];

  if (publicUrls.some(url => req.url.includes(url))) {
    return next(req);
  }

  let authReq = req;
  if (accessToken) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` }
    });
  }

  return next(authReq).pipe(
    catchError(error => {
      // Si el error es 401, intentamos refrescar el token
      if (error.status === 401) {
        return authService.refreshToken().pipe(
          switchMap(newToken => {
            if (!newToken) {
              authService.logout();
              return of(error);
            }

            // probamos de nuevo
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
