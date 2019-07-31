import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getPost(postId: number): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
}
