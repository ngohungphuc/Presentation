import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './core/service/post.service';
import { HomeComponent } from './home/home.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
