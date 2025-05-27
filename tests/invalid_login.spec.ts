// This is the old test before I updated it to use a separate file for selectors
import { test, expect } from '@playwright/test';

// This test verifies that logging in with invalid credentials shows an appropriate error message.
// It navigates to the login page, enters a fake email and password, and clicks the "Log In" button.
// It then checks that the expected error message appears and captures screenshots before and after the attempt.
test.describe("old test", () => {
test('Login fails with invalid credentials', async ({ page }) => {
    await page.goto('https://bonds-client-test.downinglabs.co.uk/account/login');
    await page.locator('input[type="email"]').fill('invalid@email.com');
    await page.locator('input[type="password"]').fill('invalid');
    await page.screenshot({ path: 'screenshots/invalid-login-details.png', fullPage: true});
    await page.getByRole('button', { name: 'Log In'}).click();
        await expect(
        page.getByText(/email\/username or password provided is. *incorrect/i)
    ).toBeVisible();
    await page.screenshot({ path: 'screenshots/invalid-login-error.png', fullPage: true});
  });
})