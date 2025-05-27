🧪 Playwright UI Tests for Login Page
This project contains Playwright tests for verifying the login page of Downing Bonds. It includes:

A basic load test (checks essential fields are visible).

An invalid login test (checks error message on wrong credentials).

📦 Prerequisites
Make sure you have the following installed:

Node.js (v18+ recommended)

npm (comes with Node.js)

🚀 Installation
Clone the repo (or create a new folder for your tests):

bash
Copy
Edit
git clone https://github.com/your-org/your-repo.git
cd your-repo
Initialize a Node.js project (if needed):

bash
Copy
Edit
npm init -y
Install Playwright and required browsers:

bash
Copy
Edit
npm install -D @playwright/test
npx playwright install
npx playwright install downloads the Chromium, Firefox, and WebKit browsers used for testing.

📁 Folder Structure
bash
Copy
Edit
.
├── pages/
│   └── LoginPage.ts     # Page Object Model for login page
├── tests/
│   └── login.spec.ts    # The tests you wrote
├── screenshots/
│   └── invalid-login-error.png (generated after test)
├── playwright.config.ts (optional config file)
└── package.json
🧪 Running the Tests
Run all tests:

bash
Copy
Edit
npx playwright test
Run a specific test file:

bash
Copy
Edit
npx playwright test tests/login.spec.ts
Run with UI (headed browser):

bash
Copy
Edit
npx playwright test --headed
Watch mode (auto-restarts on code change):

bash
Copy
Edit
npx playwright test --watch
