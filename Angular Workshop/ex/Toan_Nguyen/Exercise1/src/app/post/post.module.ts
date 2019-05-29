import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import postRoutes from './post.routing';

@NgModule({
  declarations: [ListPostComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(postRoutes)
  ]
})
export class PostModule { }
