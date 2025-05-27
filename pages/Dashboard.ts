import { Page, Locator } from '@playwright/test';

export class Dashboard {
  readonly page: Page;
  readonly breadCrumbs: Locator;
  readonly accountMenu: Locator;
  readonly profileButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.breadCrumbs = page.getByText('Home Dashboard');
    this.accountMenu = page.getByRole('button', { name: 'Account' });
    this.profileButton = page.getByRole('link', { name: 'Profile Settings' }); 
  }
}
