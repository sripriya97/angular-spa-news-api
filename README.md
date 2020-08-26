#News Project Details:

**Disclaimer : there is an issue with application of styling on dashboard page when user routes to it, so please refresh to view the carousel styling applied. (Thanks)


API being used is news - api that fetches latest news articles by, category or searh keyword

Login details :

users = [
      {
        username: 'user1',
        password: 'pass1'
      },
      {
        username: 'user2',
        password: 'pass2'
      }
    ]

Local server on port 3000 :-
Resources
  http://localhost:3000/user1
  http://localhost:3000/user2

Home
  http://localhost:3000


ng serve on port 4200 :-
  http://localhost:4200


=> The default page is the dashboard.

** Header is constant on all pages and contains :
    1) search bar where news articles can be searched using keyword and viewed. (click on search icon to perform search)
    2) Icons (from left to right):
        Dashboard - routes to dashboard
        Login - takes user to login page
        Bookmarks - takes user to bookmarks (favourite) page - only if logged in
        Logout (visible only when logged in) - Logs user out and routes to dashboard

** Login :
    This is part of login module. Takes username and password as input. When submit button is clicked it validates user, if valid routes to previous page else stays at login page.

** Dashboard :
    Displays cards with category names, upon clicking cards user is routed to category news component that displays news articles as per category

** Category Cards : 
    Material cards to display categories upon clicking card user is routed to category news that displays news articles as per category.

** Cards : 
    Material cards to display news article, has a icon to add to bookmarks on top left corner, upon clicking icon user is routed to bookmarks page if logged in.

** Category News : 
    Used to display news articles as per category. Uses cards component template.

** Search News :
    Used to display news articles as per keyword entered in search bar.Uses cards component template.

** Bookmark Card :
    Material cards to display news article IN BOOKMARKs, has a icon to delete bookmark on top left corner.

** Bookmark :
    Used to display bookmarked news articles.Uses  bookmark cards component template.


SERVICES :
1) Authentication Service : (in login module)
    - Authenticates user
    - Stores token
    - Stores username
    - Checks if user is authenticated
    - Logs user out by clearing local storage

2) Data Service :
    - Contains two behaviour subjects : one for articles being displayes, other for bookmarks

3) News Service :
    - Used for all get, post , delete operations to local server and api

4) Routing service :
    -Used for routing

Classes used :
1) Category class - for displaying category cards on dashboard
2) News Class - for storing news article details


# NewsSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
