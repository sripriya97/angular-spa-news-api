import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router : Router, private location : Location) { }

  routeToLogin() {
    return this.router.navigate(['login']);
  }

  routeToDashboard() {
    return this.router.navigate(['dashboard']);
  }

  routeToBookmarks() {
    return this.router.navigate(['bookmarks']);
  }

  routeToCategoryNews(category) {
    return this.router.navigate(['category-news',category]);
  }

  routeToSearchNews(keyword) {
    return this.router.navigate(['search-news',keyword]);
  }
  
  routeToPrevious(){
    return this.location.back();
  }

}
