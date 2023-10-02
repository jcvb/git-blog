import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import  {Post} from '../model/post';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {

  posts: Array<Post> = [];
  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.getPosts().then((posts: any) => {
      this.posts = posts;
    })
  }

}
