import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  // hacer peticion del front con el back para el aura
  updateAura(postId: number, action: string): Observable<any> {
    const url = `${this.apiUrl}aura/${postId}/`;
    return this.http.put<any>(url, {action});
  }

  getCommunities() {
    const endpointUrl: string = this.apiUrl + 'communities/';
    return this.http.get(endpointUrl)
  }

  createPost(post: any) {
    const endpointUrl: string = this.apiUrl + 'create_post/';
    return this.http.post<any>(endpointUrl, post);
  }

}
