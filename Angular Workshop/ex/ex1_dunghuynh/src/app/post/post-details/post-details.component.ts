import { Component, OnInit } from '@angular/core';
import { PostService, IPost } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  post: IPost;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.postService.getPost(id).subscribe(res => this.post = res)
    })
  }
}
