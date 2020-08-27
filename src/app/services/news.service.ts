import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { AuthenticateService } from 'src/app/login-module/authenticate.service';
import { News } from 'src/app/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey = '015a12925b734537acbd19862a2bcda9';

  constructor(private httpClient: HttpClient, private dataService: DataService, private authService: AuthenticateService) { }


  // gets news article by category
  getAllTopHeadlinesByCategory(category) {
    this.httpClient.get(`https://newsapi.org/v2/top-headlines?category=${category}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`)
    }).subscribe(data => {
      // update behaviour subject with data fetched
      this.dataService.displayArticles.next(data);
    }, error => { console.log(error.message); });
  }

  // get news by searhing keyword
  getNewsByKeyword(keyword) {
    this.httpClient.get(`https://newsapi.org/v2/everything?q=${keyword}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`)
    }).subscribe(data => {
      // update behaviour subject with data fetched
      this.dataService.displayArticles.next(data);
    }, error => {
      console.log(error.message);
    });
  }

  // get all bookmarks
  getAllBookmarks() {
    // send get request to server
    this.httpClient.get(`http://localhost:3000/${this.authService.getUsername()}`).subscribe(data => {
      // updates behaviour subject with bookmarks data
      this.dataService.bookmarkedArticles.next(data);
    }, error => {
      console.log(error.message);
    });
  }

  // add bookmark
  addBookmark(news: News) {
    // send post request to server
    this.httpClient.post(`http://localhost:3000/${this.authService.getUsername()}`, news).subscribe(data => {
      console.log(data);
    });
    // to update the bookmarks behaviour subject
    this.getAllBookmarks();
  }

  // delete bookmark
  deleteBookmark(newsId) {
    // send delete request to server
    this.httpClient.delete(`http://localhost:3000/${this.authService.getUsername()}/${newsId}`).subscribe(data => {

      // to update the behaviour subject
      this.getAllBookmarks();
    });
  }
}
