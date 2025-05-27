// Page Object Model for the Login page of the application.
// Encapsulates all selectors and actions related to logging in.
// This class provides methods to navigate to the login page,
// fill in login credentials, click the login button, and access the error message element.
// Use this page object in tests for better maintainability and separation of concerns.
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
