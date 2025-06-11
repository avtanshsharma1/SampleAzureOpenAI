/**
{
  "test_case_id": "TC002",
  "description": "Validate input fields on the login form to ensure that valid emails and passwords are processed and invalid inputs produce error messages.",
  "preconditions": "Login page must be loaded.",
  "steps_to_execute": [
    "Enter a valid email and a valid password and submit the form.",
    "Verify that a successful login attempt is triggered (dashoard redirection or token generation).",
    "Enter an invalid email format and leave the password empty, then submit.",
    "Verify that appropriate error messages are displayed."
  ],
  "expected_result": "Successful login with valid inputs; error messages shown for invalid inputs.",
  "actual_result": "",
  "status": "",
  "comments": "Checks both valid and invalid scenarios."
}
*/

const assert = require('assert');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/login');
  
  // Test valid input
  await page.type('input[type="email"]', 'user@example.com');
  await page.type('input[type="password"]', 'validPassword123');
  await page.click('button#loginButton');
  await page.waitForNavigation();
  const url = page.url();
  assert(url.includes('dashboard'), 'Should redirect to dashboard on valid login');

  // Test invalid input
  await page.goto('http://localhost:3000/login');
  await page.type('input[type="email"]', 'invalidEmail');
  await page.type('input[type="password"]', '');
  await page.click('button#loginButton');
  const errorMsg = await page.$eval('.error', el => el.textContent);
  assert(errorMsg.includes('invalid') || errorMsg.includes('required'), 'Proper error message should be displayed');

  await browser.close();
  console.log('TC002 executed successfully');
})();