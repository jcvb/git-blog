import { Component, Input } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  @Input() category!: string;
  @Input() posts!: Array<Post>;
}
