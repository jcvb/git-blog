import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './model/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'git-blog';
  categories: Array<string> = [];
  posts: Array<Post> = [];
  constructor(
    private postService: PostsService
  ) {}

  ngOnInit() {
    this.categories = ['Enterprise', 'Education', 'Policy', 'Company'];
    this.postService.fetchData().subscribe((response) => {
      this.posts = response;
    });
  }
}
