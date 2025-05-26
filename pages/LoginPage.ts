// Page Object Model for the Login page of the application.
// Encapsulates all selectors and actions related to logging in.
// This class provides methods to navigate to the login page,
// fill in login credentials, click the login button, and access the error message element.
// Use this page object in tests for better maintainability and separation of concerns.
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="Password"]');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.errorMessage = page.locator('text="The email/username or password provided is incorrect"');
  }

  async navigate() {
    await this.page.goto('https://bonds-client-test.downinglabs.co.uk/account/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
