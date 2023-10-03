import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    const API_URL = 'https://typescript-server-coral.vercel.app/posts';
    return this.http.get(API_URL);
  }
}
