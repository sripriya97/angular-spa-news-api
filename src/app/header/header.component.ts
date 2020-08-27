import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';
import { AuthenticateService } from 'src/app/login-module/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  imageURL = 'assets/news.png';
  imageText = 'news icon';
  keyword = '';

  constructor(private routerService: RoutingService, private authService: AuthenticateService) {
    this.loggedIn = this.authService.isAuthenticated();
  }
  ngOnInit() { }

  islogin() {
    return this.authService.isAuthenticated();
  }

  goToBookmarks() {
    // go to bookmarks if already logged in, else to login page
    if (this.authService.isAuthenticated()) {
      this.routerService.routeToBookmarks();
    } else {
      this.routerService.routeToLogin();
      alert('Please login to view bookmarks');
    }
  }
  goToLogin() {
    // route to login page
    this.routerService.routeToLogin();
  }
  goToDashboard() {
    // route to dashboard
    this.routerService.routeToDashboard();
  }
  searchByKeyword() {
    // search by keyword and go to search news
    this.routerService.routeToSearchNews(this.keyword);
    this.keyword = '';
  }
  logout() {
    // logout
    this.authService.logout();
    // route to dashboard
    this.routerService.routeToDashboard();
  }
}
