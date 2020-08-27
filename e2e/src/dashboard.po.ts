import { browser, by, element, $, ElementFinder } from 'protractor';

export class DashboardPage {

  public navigateToDashboardPage() {
    browser.get('/');
  }

  public getHeading1(): ElementFinder {
    return element(by.css('h1'));
  }

  public getPageTitle() {
    return browser.getTitle();
  }

  public getCard(): ElementFinder {
    return element(by.css('.carousel-cell'));
  }
  public getPageCurrentUrl() {
    return browser.getCurrentUrl();
  }
}
