import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/';
  private jwtHelper = new JwtHelperService();

  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());
  public authStatus$ = this.authStatus.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  register(registerData: any): Observable<any> {
    const endpointUrl: string = this.apiUrl + 'register/';
    const enviarDatos = {
      "first_name": registerData.name,
      "username": registerData.username,
      "email": registerData.email,
      "password": registerData.password,
      "age": registerData.age
    };
    return this.http.post<any>(endpointUrl, enviarDatos);
  }

  login(username: string, password: string): Observable<any> {
    const endpointUrl: string = this.apiUrl + 'token/';
    return this.http.post(endpointUrl, { username, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        this.authStatus.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    // Actualizamos el estado a "false" tras el logout
    this.authStatus.next(false);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  getAccessToken(): string | null {
    if (!this.isAuthenticated()) {
      return null;
    }
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  // Método para refrescar el token de acceso
  refreshToken(): Observable<{ access: string } | null> {
    const endpointUrl: string = this.apiUrl + 'token/refresh/';
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      return of(null);
    }

    return this.http.post<{ access: string }>(endpointUrl, { refresh: refreshToken }).pipe(
      tap(response => {
        if (response && response.access) {
          localStorage.setItem('access_token', response.access);
          // Se puede actualizar el estado si es necesario
          this.authStatus.next(true);
        }
      }),
      catchError(error => {
        console.error('Token refresh failed:', error);
        this.logout();
        return of(null);
      })
    );
  }
}
