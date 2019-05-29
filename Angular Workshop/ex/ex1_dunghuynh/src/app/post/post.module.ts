import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostModuleRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    PostsComponent, 
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostModuleRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
