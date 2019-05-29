import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/service/post.service';
import { Post } from 'src/app/core/model/Post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPostComponent implements OnInit {
  public posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
}
