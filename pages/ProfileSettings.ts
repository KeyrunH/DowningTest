import { Page, Locator } from '@playwright/test';

export class ProfileSettings {
  readonly page: Page;
  readonly profileHeading: Locator;
  readonly phoneNumber: Locator;
  readonly updatePersonalDetails: Locator;
  readonly enterAddressManually: Locator;
  readonly postCode: Locator;
  readonly editPersonalDetails: Locator;
  readonly personalDetailsUpdated: Locator;


  constructor(page: Page) {
    this.page = page;
    this.profileHeading = page.getByRole('heading', { name: 'Profile Settings' });
    this.phoneNumber = page.locator('input[type="tel"]');
    this.updatePersonalDetails = page.getByRole('button', { name: 'Update' });
    this.enterAddressManually = page.getByText('Enter address manually');
    this.postCode = page.locator('#client-address-0-pcode');
    this.editPersonalDetails = page.getByRole('button', { name: 'Edit' });
    this.personalDetailsUpdated = page.locator('div').filter({ hasText: /^Thank you, your personal details have been updated\.$/ }).first()
  }

  async updatePhoneNumberWithRandom(): Promise<string> {
    const newPhone = '07' + Math.floor(100000000 + Math.random() * 900000000).toString();
    await this.phoneNumber.fill(newPhone);
    return newPhone;
  }
}