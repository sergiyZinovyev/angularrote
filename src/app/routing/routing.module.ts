import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from '../posts/posts.component';
import { PostComponent } from '../post/post.component';
import { LogComponent } from '../log/log.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'post/:id', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LogComponent },
  { path: 'home', component: PostsComponent, canActivate: [AuthGuard]},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
