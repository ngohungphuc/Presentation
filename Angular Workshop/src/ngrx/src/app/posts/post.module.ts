import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { posts_management_module } from "./shared/models/post.model";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PostEffects } from "./shared/effects/post.effect";
import { postReducers } from "./shared/reducers";
import { PostComponent } from "./post/post.component";
import { Routes, RouterModule } from "@angular/router";
import { PostService } from "./shared/services/post.service";
import { HttpClientModule } from '@angular/common/http';

export const postRoutes: Routes = [{ path: "posts", component: PostComponent }];

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(posts_management_module.storekey, postReducers),
    EffectsModule.forFeature([PostEffects]),
    RouterModule.forChild(postRoutes)
  ],
  providers: [PostService]
})
export class PostModule {}
