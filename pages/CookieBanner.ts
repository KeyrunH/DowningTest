import { Page, Locator } from '@playwright/test';

export class CookieBanner {
  readonly page: Page;
  readonly cookieAccept: Locator;


  constructor(page: Page) {
    this.page = page;
    this.cookieAccept = page.getByRole('button', { name: 'Accept All Cookies' });
  }
}
