import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {

  public newsByKeyword: Array<News>;
  public keyword;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private dataService: DataService) {
    this.activatedRoute.params.subscribe(data => {
      // store keyword from route parameter
      this.keyword = data.keyword;
      // update the behaviour subject
      this.newsService.getNewsByKeyword(this.keyword);
    });

  }

  ngOnInit() {
    // populate array from behaviour subject
    this.dataService.displayArticles.subscribe(data => {
      console.log(data);
      this.newsByKeyword = data.articles;
    }, error => {
      console.log(error.message);

    });
  }

}
