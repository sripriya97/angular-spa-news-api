import { DashboardPage } from './dashboard.po';
import { browser, logging } from 'protractor';

describe('Dashboard page', () => {
  let page = new DashboardPage();

  beforeAll(() => { 
    page.navigateToDashboardPage();
  });

  it('should navigate to dashboard page', () => {
    expect(page.getPageCurrentUrl()).toContain('/dashboard');
  });


  it('should have the correct title', () => {
    expect(page.getPageTitle()).toBe('The Daily News');
  });


  it('should have heading with correct title', () => {
    expect(page.getHeading1().getText()).toBe('Top News Stories');
  });

  it('should have card', () => {
    expect(page.getCard().isDisplayed());
  });


  it('should navigate to category upon clicking card', () => {
    
    page.getCard().click();
    expect(page.getPageCurrentUrl()).toContain('/category');
  });



});

