import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input() public category: Category;
  constructor() { }

  ngOnInit() {
  }

}
