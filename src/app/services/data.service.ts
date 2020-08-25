import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { News } from 'src/app/news';
import { NewsService } from 'src/app/services/news.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //to store bookmarked articles
  public bookmarkedArticles = new BehaviorSubject<any>('');
  //to store artiles to be displayed
  public displayArticles = new BehaviorSubject<any>('');

  constructor() {
  }

}
