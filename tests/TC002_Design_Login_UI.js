/**
{
  "test_case_id": "TC002",
  "description": "Verify that the login page is responsive on mobile devices.",
  "preconditions": "Approved responsive design specs; mobile viewport simulation prepared.",
  "steps_to_execute": [
    "Simulate a mobile device viewport (e.g., 375x667) using the test framework.",
    "Open the login page URL.",
    "Check that UI elements reflow appropriately and are visible with proper scaling."
  ],
  "expected_result": "The login page displays a responsive layout; all input elements and buttons are accessible on mobile.",
  "actual_result": "",
  "status": "",
  "comments": ""
}
*/

const puppeteer = require('puppeteer');

describe('Design Login UI - Mobile Responsiveness', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.setViewport({ width: 375, height: 667 });
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Login page adapts to mobile viewport', async () => {
    await page.goto('http://localhost:3000/login');
    const loginForm = await page.$('form#loginForm');
    expect(loginForm).toBeDefined();
    const formBox = await loginForm.boundingBox();
    expect(formBox.width).toBeLessThanOrEqual(375);
  });
});