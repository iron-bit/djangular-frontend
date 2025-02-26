import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) {
  }

  getUserInfo() {
    const endpointUrl: string = this.apiUrl + 'profile/';
    return this.http.get(endpointUrl);
  }

  getPostsInfo() {
    const endpointUrl: string = this.apiUrl + 'posts/';
    return this.http.get(endpointUrl);
  }

}
