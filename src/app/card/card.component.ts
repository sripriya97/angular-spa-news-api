import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/news';
import { AuthenticateService } from 'src/app/login-module/authenticate.service';
import { RoutingService } from 'src/app/services/routing.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public news: News;
  constructor(private authService: AuthenticateService, private routerService: RoutingService, private newsService: NewsService) { }

  ngOnInit() {
  }
  bookmarkArticle() {
    // check if logged in
    if (this.authService.isAuthenticated()) {
      // add news article to bookmarks
      this.newsService.addBookmark(this.news);
      // route to bookmarks page
      this.routerService.routeToBookmarks();
    } else {
      // else route to login page
      this.routerService.routeToLogin();
      alert('Please login to view bookmarks');
    }
  }

}
