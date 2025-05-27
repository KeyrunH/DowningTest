# Playwright UI Tests For Downing Bonds
## Installation
### Clone the repository (or create a new folder for your tests):
```
git clone https://github.com/your-org/your-repo.git
cd your-repo
```
### Initialize a Node.js project (if not already done):
```
npm init -y
```
### Install Playwright and browsers:
```
npm install -D @playwright/test
npx playwright install
npx playwright install
```
## Running the Tests
### Run all tests:
```
npx playwright test
```
### Run a specific test file:
```
npx playwright test tests/login.spec.ts
```
###Run with UI (headed browser):
```
npx playwright test --headed
```
### Watch mode (auto-restarts on code change):
```
npx playwright test --watch
```
## Information
The "Analysis and Strategy Document" can be found in the /docs folder, along with an AI prompts doc.
I relied heavily on the use of AI for help with writing the tests. I was aware of basic principles (Such as the use of Page Object Models and .env files), but AI helped a great deal in writing the tests.

