import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private postsService: PostsService) {}

  post: Post = {};

  ngOnInit() {
    this.postsService.getPostById("id").then((post: any) => {
      console.log(post);
      this.post = post;
    } )
  }
}
