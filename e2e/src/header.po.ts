import { browser, by, element, $, ElementFinder } from 'protractor';

export class Header {

  public navigateToDashboardPage() {
    browser.get('/');
  }
  public navigateToLoginPage() {
    browser.get('/login');
  }
  public navigateToBookmarksPage() {
    browser.get('/bookmarks');
  }

  public getLoginIcon(): ElementFinder {
    return element(by.name('login'));
  }
  public getBookmarkIcon(): ElementFinder {
    return element(by.name('bookmark'));
  }
  public getHomeIcon(): ElementFinder {
    return element(by.name('home'));
  }
  public getPageCurrentUrl() {
    return browser.getCurrentUrl();
  }
}
