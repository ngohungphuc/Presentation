import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPost } from "../models/post.model";

@Injectable()
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  }
}
