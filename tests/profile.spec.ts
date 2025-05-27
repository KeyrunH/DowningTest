import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';
import { ProfileSettings } from '../pages/ProfileSettings';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = process.env.BASE_URL!;
const email = process.env.LOGIN_EMAIL!;
const password = process.env.LOGIN_PASSWORD!;

// This test verifies that a client can successfully log in and access their profile page.
// It performs the following steps:
// 1. Navigates to the login page and logs in using valid credentials.
// 2. Verifies that the user lands on the dashboard and that breadcrumbs are visible.
// 3. Opens the account menu and clicks the "Profile" button.
// 4. Confirms the user is redirected to the profile page and that the profile heading is visible.
// 5. Takes a full-page screenshot of the profile page.
test.describe("access profile", () => {
    test('client logs in and accesses their profile', async ({ page }) => {
    await page.goto(`${baseUrl}/account/login`);
    const loginPage = new LoginPage(page);
    const dashboard = new Dashboard(page);
    const profileSettings = new ProfileSettings(page);  
    await loginPage.login(email, password);
    await expect(page).toHaveURL(`${baseUrl}/account/dashboard`);
    await expect(dashboard.breadCrumbs).toBeVisible();
    await dashboard.accountMenu.click();
    await dashboard.profileButton.click();
    await expect(page).toHaveURL(`${baseUrl}/account/profile`);
    await page.waitForLoadState('networkidle');
    await expect(profileSettings.profileHeading).toBeVisible();
    await page.screenshot({ path: 'screenshots/profile_access.png', fullPage: true });
    });

})
// This test verifies that a client can log in, navigate to their profile settings, 
// update their phone number with a newly generated random value, and save the change. 
// It checks that the profile page is correctly loaded, the phone number field is visible, 
// and that the update is confirmed by a success message.
test.describe("update", () => {
  test('client logs in and accesses their profile', async ({ page }) => {
    await page.goto(`${baseUrl}/account/login`);
    const loginPage = new LoginPage(page);
    const dashboard = new Dashboard(page);
    const profileSettings = new ProfileSettings(page);

    await loginPage.login(email, password);
    await expect(page).toHaveURL(`${baseUrl}/account/dashboard`);
    await expect(dashboard.breadCrumbs).toBeVisible();

    await dashboard.accountMenu.click();
    await dashboard.profileButton.click();

    await expect(page).toHaveURL(`${baseUrl}/account/profile`);
    await page.waitForLoadState('networkidle');
    await expect(profileSettings.profileHeading).toBeVisible();

    await profileSettings.editPersonalDetails.click();
    await expect(profileSettings.phoneNumber).toBeVisible();

    // ✅ Call the random phone number generator from your POM
    const newPhone = await profileSettings.updatePhoneNumberWithRandom();

    // Optionally assert the field value
    await expect(profileSettings.phoneNumber).toHaveValue(newPhone);

    // Proceed to click "Update" to save
    await profileSettings.updatePersonalDetails.click();
    await expect(profileSettings.personalDetailsUpdated).toBeVisible();

    await page.screenshot({ path: 'screenshots/profile_update.png', fullPage: true });
  });
});