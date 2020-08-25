import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModuleModule } from './login-module/login-module.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryNewsComponent } from './category-news/category-news.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import {MatInputModule} from '@angular/material/input';
import { SearchNewsComponent } from './search-news/search-news.component';
import { BookmarkCardComponent } from './bookmark-card/bookmark-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CardComponent,
    CategoryCardComponent,
    CategoryNewsComponent,
    BookmarksComponent,
    SearchNewsComponent,
    BookmarkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModuleModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
