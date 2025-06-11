/**
{
  "test_case_id": "TC005",
  "description": "Ensure that the dashboard components render correctly on various devices and orientations.",
  "preconditions": "Dashboard page deployed; test environment simulating multiple devices.",
  "steps_to_execute": [
    "Load the dashboard page in a desktop browser.",
    "Simulate mobile and tablet viewports.",
    "Verify that widgets, graphs, and navigation menus are visible and properly aligned."
  ],
  "expected_result": "The dashboard components adjust to different resolutions and orientations without UI breakage.",
  "actual_result": "",
  "status": "",
  "comments": "Responsive design validation across common device sizes."
}
*/

const puppeteer = require('puppeteer');
const assert = require('assert');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/dashboard');

  // Desktop viewport
  await page.setViewport({width: 1280, height: 800});
  let widget = await page.$('.widget');
  assert(widget, 'Widget should be visible in desktop view');

  // Mobile viewport
  await page.setViewport({width: 375, height: 667});
  widget = await page.$('.widget');
  assert(widget, 'Widget should be visible in mobile view');

  await browser.close();
  console.log('TC005 executed successfully');
})();