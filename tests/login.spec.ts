// This test was copied straight from ChatGPT
// The selectors needed to be updated
// I used the Playwright code generator to get the correct locator
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe("load login", () => {
    test('Login page loads and displays the form', async ({ page }) => {
    await page.goto('https://bonds-client-test.downinglabs.co.uk/account/login');

    await expect(page.locator('input[type="Email"]')).toBeVisible();
    await expect(page.locator('input[type="Password"]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    });
})

test.describe("invalid login", () => {
    test('Login page loads and displays the form', async ({ page }) => {
    await page.goto('https://bonds-client-test.downinglabs.co.uk/account/login');
    const loginPage = new LoginPage(page);
    await loginPage.login('invalid@email.com', 'invalid');
    await expect(loginPage.errorMessage).toBeVisible();
    await page.screenshot({ path: 'screenshots/invalid-login-error.png', fullPage: true });

    // await expect(page.locator('input[type="Email"]')).toBeVisible();
    // await loginPage.emailInput.fill('invalid@email.com');
    await page.screenshot({ path: 'screenshots/emaillocator.png', fullPage: true });
    // await expect(page.locator('input[type="Password"]')).toBeVisible();
    // await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();

    // await loginPage.emailInput.fill('invalid@email.com');
    // await page.screenshot({ path: 'screenshots/emaillocator.png', fullPage: true });
    
    });
})
