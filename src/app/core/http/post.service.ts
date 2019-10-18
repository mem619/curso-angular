import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiRoute: string = environment.api + 'posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiRoute);
  }
}
