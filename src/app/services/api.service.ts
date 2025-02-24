import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/'

  constructor(private http : HttpClient) { }

  
  register(registerData: any): Observable<any> {
    const url: string = this.apiUrl + 'register/';

    const enviarDatos = {
      "username": registerData.nickname,
      "email": registerData.email,
      "password": registerData.password
    }

  
    return this.http.post<any>(url, enviarDatos);
  }
  
  


}
