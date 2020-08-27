import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { NewsService } from 'src/app/services/news.service';
import { Category } from 'src/app/category';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public categoryArray: Array<Category> = [];

  constructor(private routerService: RoutingService) {
    this.categoryArray.push(new Category('Business', 'assets/Business.jpg', 'Business Category',
      'Get latest business news'));
    this.categoryArray.push(new Category('Entertainment', 'assets/entertainment.png', 'Entertainment Category',
      'Get latest entertainment news'));
    this.categoryArray.push(new Category('General', 'assets/general.png', 'General Category',
      'Get latest news'));
    this.categoryArray.push(new Category('Health', 'assets/health.jpg', 'Health Category',
      'Get latest health news'));
    this.categoryArray.push(new Category('Science', 'assets/science.png', 'Science Category',
      'Get latest science news'));
    this.categoryArray.push(new Category('Sports', 'assets/sports.jpg', 'Sports Category',
      'Get latest sports news'));
    this.categoryArray.push(new Category('Technology', 'assets/technology.jpg', 'Technology Category',
      'Get latest tech news'));
  }

  goToCategory(category) {
    // route to category-news component
    this.routerService.routeToCategoryNews(category);
  }

}
