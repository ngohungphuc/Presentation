import { Component, OnInit } from '@angular/core';
import { PostService, IPost } from '../post.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(
    private postService: PostService,
    private _router: Router
  ) { }

  posts: Observable<IPost[]>;

  ngOnInit() {
    this.posts = this.postService.getPosts()
  }

  navigate = (id: number) => this._router.navigate(['/posts', id])
}
