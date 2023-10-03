import { Component, Input, SimpleChanges } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() posts!: Array<Post>;

  post: Post = {};

  ngOnInit() {
    this.post = this.posts?.[0];
  }
}
