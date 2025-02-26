import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, switchMap, catchError, of } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.getAccessToken();
  console.log('in Interceptor');

  // Para los endpoints que no requieren autenticación
  const publicUrls = [
    '/api/token/',
    '/api/register/',
  ];

  if (publicUrls.some(url => req.url.includes(url))) {
    return next(req);
  }

  let authReq = req;
  if (accessToken) {
    console.log('Adding token to request');
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` }
    });
  }

  return next(authReq).pipe(
    catchError(error => {
      // Si el error es 401, intentamos refrescar el token
      if (error.status === 401) {
        console.log('Not authorized, trying to refresh token');
        return authService.refreshToken().pipe(
          switchMap(newToken => {
            console.log('Token: ' + newToken);
            if (!newToken) {
              console.log('Token is empty, logging out');
              authService.logout();
              return of(error);
            }
            console.log('Token refreshed, retrying request');

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
