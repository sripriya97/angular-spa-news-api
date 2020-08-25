import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.css']
})
export class BookmarkCardComponent implements OnInit {

  @Input() public news: News;
  constructor(private newsService : NewsService) { }

  ngOnInit() {
  }

  removeFromBookmark(news) {
    //remove from bookmark array and refresh behaviour subject
    this.newsService.deleteBookmark(news.id);
  }

}
