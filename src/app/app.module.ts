import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { LogComponent } from './log/log.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { RoutingModule } from './routing/routing.module';
import { AuthGuard } from './auth.guard';

import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

/*const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'login', component: LogComponent },
  { path: 'home', component: PostsComponent},
  { path: '',   redirectTo: '/posts', pathMatch: 'full' }
];*/


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    LogComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
