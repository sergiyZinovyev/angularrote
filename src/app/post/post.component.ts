import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post;

  constructor(
    private route: ActivatedRoute,
    private data: PostService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.post = this.data.getPost(id);
    console.log(id)
    console.log(this.post)
  }

}
