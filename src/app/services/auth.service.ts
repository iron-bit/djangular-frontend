import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/'
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {
  }


  register(registerData: any): Observable<any> {
    const endpointUrl: string = this.apiUrl + 'register/';

    const enviarDatos = {
      "username": registerData.nickname,
      "email": registerData.email,
      "password": registerData.password
    }

    return this.http.post<any>(endpointUrl, enviarDatos);
  }


  login(username: String, password: String): Observable<any> {
    const endpointUrl: string = this.apiUrl + 'token/';

    return this.http.post(endpointUrl, {username, password}).pipe(
      tap((response: any) => {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }


  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  //Refresh the access token
  refreshToken(): Observable<{ access: string } | null> {
    const endpointUrl: string = this.apiUrl + 'token/refresh/';
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      return of(null);
    }

    return this.http.post<{ access: string }>(endpointUrl, {refresh: refreshToken}).pipe(
      tap(response => {
        if (response && response.access) {
          localStorage.setItem('access_token', response.access);
        }
      }),
      catchError(error => {
        console.error('Token refresh failed:', error);
        this.logout();
        return of(null);
      })
    );
  }


  isTokenExpired(): boolean {
    const token = this.getAccessToken();
    if (!token) return true;

    const tokenParts = JSON.parse(atob(token.split('.')[1]));
    const exp = tokenParts.exp;
    const now = Math.floor(Date.now() / 1000);

    return exp < now;
  }
}
