import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/core/model/Post';
import { PostService } from 'src/app/core/service/post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id']) {
        console.log(params);
        const id = +params['id'];
        this.postService.getPost(id).subscribe(result => {
          console.log(result);
          this.post = result;
        });
      }
    });
  }

}
