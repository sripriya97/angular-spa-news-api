import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { DataService } from 'src/app/services/data.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  public bookmarksArray: Array<News>;
  constructor(private dataService: DataService, private newsService: NewsService) {
    // updates behaviour subject with all bookmarked articles
    this.newsService.getAllBookmarks();
   }

  ngOnInit() {
    // load bookmarksArray with behavior subject data
    this.dataService.bookmarkedArticles.subscribe(data => {
      this.bookmarksArray = data;
    }, error => { console.log(error.message); });
  }
  removeFromBookmark(news) {
    // remove from bookmark array and refresh behaviour subject
    this.newsService.deleteBookmark(news);
  }

}
