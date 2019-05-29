import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { LoginPipe } from './login.pipe';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'login', component: LogComponent },
  { path: 'home', component: PostsComponent},
  { path: '',   redirectTo: '/post', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    LoginPipe,
    LogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
