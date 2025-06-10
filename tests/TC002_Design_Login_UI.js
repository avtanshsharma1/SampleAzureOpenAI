/**
{
  "test_case_id": "TC002",
  "description": "Validate that the Login UI adheres to the approved design guidelines (colors, fonts, spacing).",
  "preconditions": "Reference design guidelines are available; UI snapshot of approved design exists.",
  "steps_to_execute": [
    "Render the Login UI in a test environment.",
    "Capture a snapshot of the rendered UI.",
    "Compare the snapshot to the baseline approved design snapshot."
  ],
  "expected_result": "UI snapshot from the test matches the approved design snapshot within the acceptable threshold.",
  "actual_result": "",
  "status": "",
  "comments": "Uses visual regression testing using a tool like jest-image-snapshot."
}
*/

const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

test('Login UI design matches approved guidelines', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/login');
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchImageSnapshot();
  await browser.close();
});