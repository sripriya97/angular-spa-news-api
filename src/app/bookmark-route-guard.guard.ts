import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './login-module/authenticate.service';
import { RoutingService } from './services/routing.service';

@Injectable({
  providedIn: 'root'
})

export class BookmarkRouteGuardGuard implements CanActivate {

  constructor(private authService: AuthenticateService, private routerService: RoutingService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated) {
      this.routerService.routeToLogin();
      alert('Please login to view bookmarks');
    }
    return this.authService.isAuthenticated();
  }

}
