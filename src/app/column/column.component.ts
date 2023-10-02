import { Component, Input } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  @Input() category!: string;
  posts: Array<any> = [];

  constructor(private postsService: PostsService) {}
  ngOnInit() {
    this.postsService.getPostByCategory(this.category).then((posts: any) => {
      this.posts = posts;
    });
  }
}
