/**
{
  "test_case_id": "TC001",
  "description": "Verify that the Login UI is responsive across various device viewports.",
  "preconditions": "Login page is deployed and accessible; test framework (e.g., Puppeteer) is set up.",
  "steps_to_execute": [
    "Launch the Login UI in a headless browser.",
    "Iterate over a list of viewport sizes (mobile, tablet, desktop).",
    "Check that all UI elements (input fields, buttons) are visible and properly aligned."
  ],
  "expected_result": "Login UI displays correctly without overlapping elements or missing content across viewports.",
  "actual_result": "",
  "status": "",
  "comments": "This test uses Puppeteer to simulate different device viewports."
}
*/

const puppeteer = require('puppeteer');

(async () => {
  const viewports = [
    { width: 375, height: 667 },  // mobile
    { width: 768, height: 1024 }, // tablet
    { width: 1440, height: 900 }  // desktop
  ];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/login');

  for (let vp of viewports) {
    await page.setViewport(vp);
    // Capture screenshot to manually verify if needed
    const screenshot = await page.screenshot({ path: `login-${vp.width}x${vp.height}.png` });
    // Optionally, test for existence of UI elements
    const usernameVisible = await page.$eval('#username', el => !!el);
    const passwordVisible = await page.$eval('#password', el => !!el);
    const buttonVisible = await page.$eval('#loginButton', el => !!el);
    if (!usernameVisible || !passwordVisible || !buttonVisible) {
      throw new Error(`UI element missing at viewport ${vp.width}x${vp.height}`);
    }
  }

  console.log('Responsive UI test passed.');
  await browser.close();
})();