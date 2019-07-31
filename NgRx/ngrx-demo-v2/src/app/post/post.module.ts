import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { RouterModule } from "@angular/router";

import { postReducer } from "./store/reducers/post.reducer";
import { PostService } from "./store/services/post.service";
import { PostEffects } from "./store/effects/post.effects";
import { POST_FEATURE } from "../core/models/store.key.model";

import { PostContainerComponent } from "./components/post-container/post-container.component";
import { postRoutes } from "./post.routing";

@NgModule({
  declarations: [PostContainerComponent],
  providers: [PostService],
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes),
    HttpClientModule,
    StoreModule.forFeature(POST_FEATURE.storekey, postReducer),
    EffectsModule.forFeature([PostEffects])
  ]
})
export class PostModule {}
