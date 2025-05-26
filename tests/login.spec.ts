import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// This test was copied straight from ChatGPT
// The selectors needed to be updated
// I used the Playwright code generator to get the correct locator
// This test verifies that the login page loads correctly and displays all essential form elements.
// It checks for the visibility of the email input, password input, and the "Log in" button.
test.describe("load login", () => {
    test('Login page loads and displays the form', async ({ page }) => {
    await page.goto('https://bonds-client-test.downinglabs.co.uk/account/login');

    await expect(page.locator('input[type="Email"]')).toBeVisible();
    await expect(page.locator('input[type="Password"]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    });
})

// This test verifies that logging in with invalid credentials shows an appropriate error message.
// It navigates to the login page, enters a fake email and password, and clicks the "Log In" button.
// It then checks that the expected error message appears and captures screenshots before and after the attempt.
test.describe("invalid login", () => {
    test('Login page loads and displays the form', async ({ page }) => {
    await page.goto('https://bonds-client-test.downinglabs.co.uk/account/login');
    const loginPage = new LoginPage(page);
    await loginPage.login('invalid@email.com', 'invalid');
    await expect(loginPage.errorMessage).toBeVisible();
    await page.screenshot({ path: 'screenshots/invalid-login-error.png', fullPage: true });
    
    });
})
