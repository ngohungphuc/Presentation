import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostModuleRoutingModule { }
