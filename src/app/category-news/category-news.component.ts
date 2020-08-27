import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.css']
})
export class CategoryNewsComponent implements OnInit {

  public newsByCategory: Array<News>;
  public category;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private dataService: DataService) {
    this.activatedRoute.params.subscribe(data => {
      // get category from route parameter
      this.category = data.category;
    });
    // update behaviour subject by category
    this.newsService.getAllTopHeadlinesByCategory(this.category);
  }

  ngOnInit() {
    this.dataService.displayArticles.subscribe(data => {
      this.newsByCategory = data.articles;
    }, error => {
      console.log(error.message);
    });
  }

}
