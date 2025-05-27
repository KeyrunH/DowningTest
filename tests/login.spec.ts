import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = process.env.BASE_URL!;
const email = process.env.LOGIN_EMAIL!;
const password = process.env.LOGIN_PASSWORD!;


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
    test('Login fails and error is displayed', async ({ page }) => {
    await page.goto('https://bonds-client-test.downinglabs.co.uk/account/login');
    const loginPage = new LoginPage(page);
    await loginPage.login('invalid@email.com', 'invalid');
    await expect(loginPage.errorMessage).toBeVisible();
    await page.screenshot({ path: 'screenshots/invalid-login-error.png', fullPage: true });
    
    });
})

// This test verifies that a user can successfully log in with valid credentials.
// It navigates to the login page, uses the LoginPage object to perform the login,
// and checks that the user is redirected to the dashboard. It waits for the page to
// fully load (network idle), asserts that the breadcrumb navigation is visible (as a
// sign of a successful dashboard load), and captures a screenshot of the result.
test.describe.only("valid login", () => {
    test('Login page loads and displays the clients profile', async ({ page }) => {
    await page.goto(`${baseUrl}/account/login`);
    const loginPage = new LoginPage(page);
    await loginPage.login(email, password);
    await expect(page).toHaveURL(`${baseUrl}/account/dashboard`);
    await page.waitForLoadState('networkidle');
    await expect(loginPage.breadCrumbs).toBeVisible();
    await page.screenshot({ path: 'screenshots/valid_login.png', fullPage: true });    
    });
})
