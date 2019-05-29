import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<IPost[]>(this.API + '/posts')
  }

  getPost(id: number) {
    return this.http.get<IPost>(this.API + '/posts/' + id)
  }
}
