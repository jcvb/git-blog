import { Component, Input } from '@angular/core';
import  {Post} from '../model/post';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  @Input() posts!: Array<Post>;

  newPosts: Array<Post> = [];

  ngOnInit() {

      this.newPosts = this.posts.slice(0, 3);

  }

}
