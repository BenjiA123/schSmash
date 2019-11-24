import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnDestroy, OnInit {
  // posts = [
  //   {
  //     title:'First Post',content:"This is the first Post"       This was a test
  //   },
  //    {
  //     title:'Second Post',content:"This is the second Post"
  //   },
  //   {
  //     title:'Third Post',content:"This is the third Post"
  //   }
  // ]
  posts: Post[] = []
  constructor(public postService: PostService) {
  }
  postsSub: Subscription
  ngOnInit() {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();

  }
}
