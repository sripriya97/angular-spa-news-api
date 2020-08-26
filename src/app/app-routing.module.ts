import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from 'src/app/login-module/login-form/login-form.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { BookmarksComponent } from 'src/app/bookmarks/bookmarks.component';
import { CategoryNewsComponent } from 'src/app/category-news/category-news.component';
import { SearchNewsComponent } from 'src/app/search-news/search-news.component';
import { BookmarkRouteGuardGuard } from './bookmark-route-guard.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    canActivate: [BookmarkRouteGuardGuard]
  },
  {
    path: 'category-news/:category',
    component: CategoryNewsComponent
  },
  {
    path: 'search-news/:keyword',
    component: SearchNewsComponent
  },
  {
    path: '',
    component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
