import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../pipe-demo/modal/post.modal';
import { PostService } from '../../pipe-demo/service/post.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit , OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  isError: boolean = false;
  error: string = '';
  private errorSub: Subscription | undefined;

  constructor(private http: HttpClient, private postService: PostService) { }
 
  ngOnInit() {
    this.errorSub =  this.postService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    })
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isError = false;
      this.isFetching = false;
      this.loadedPosts = posts
    }, errorRes => {
      this.isError = true;
      this.isFetching = false;
      this.postService.error.next(errorRes.message)
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.postService.fetchPosts().subscribe(posts => {
      this.isError = false;
      this.isFetching = false;
      this.loadedPosts = posts
    }, errorRes => {
      this.isError = true;
      this.isFetching = false;
      this.postService.error.next(errorRes.message)
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }


  ngOnDestroy(): void {
    if(this.errorSub)
      this.errorSub.unsubscribe()
  }


}