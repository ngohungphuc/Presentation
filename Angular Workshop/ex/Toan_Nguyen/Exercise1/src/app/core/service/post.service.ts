import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<Post> {
    return this.getPosts().pipe(
      map(posts => {
        console.group("getPost");
        console.log(posts);
        console.log(id);
        let post = posts.find(p => p.id === id);
        console.log(post);
        console.groupEnd();
        return post;
      })
    );
  }
}
