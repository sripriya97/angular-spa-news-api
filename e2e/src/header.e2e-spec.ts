import { browser, logging } from 'protractor';
import { Header } from './header.po';

describe('Dashboard page', () => {
  let page = new Header();

 //bookmark icon
  it('should have bookmark icon', () => {
    expect(page.getBookmarkIcon().isPresent());
  });

  it('should navigate to login upon clicking bookmark as not logged in', () => {
    page.getBookmarkIcon().click();
    expect(page.getPageCurrentUrl()).toContain('/login');
  });

  //login icon
  it('should have login icon', () => {
    expect(page.getLoginIcon().isPresent());
  });

  it('should navigate to login upon clicking log in', () => {
    page.getLoginIcon().click();
    expect(page.getPageCurrentUrl()).toContain('/login');
  });

  //dashboard icon
  it('should have bookmark icon', () => {
    expect(page.getHomeIcon().isPresent());
  });

  it('should navigate to dashboard upon clicking home', () => {
    page.getHomeIcon().click();
    expect(page.getPageCurrentUrl()).toContain('/dashboard');
  });

});

