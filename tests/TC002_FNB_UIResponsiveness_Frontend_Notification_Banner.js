/**
{
  "test_case_id": "TC002_FNB_UIResponsiveness",
  "description": "Validate that the notification banner is responsive and does not disrupt other UI elements.",
  "preconditions": "Notification banner is integrated on a page with dynamic content.",
  "steps_to_execute": [
    "Resize the window to different dimensions.",
    "Ensure the notification banner adjusts in position and size without overlaying critical content."
  ],
  "expected_result": "The notification banner remains unobtrusive and resizes smoothly, maintaining overall page layout integrity.",
  "actual_result": "",
  "status": "",
  "comments": "Test across various devices including mobile and tablet screen sizes."
}
*/

// Using Puppeteer to test responsiveness of the notification banner
const { expect } = require('chai');

describe('Notification Banner - UI Responsiveness', () => {
  it('should adjust responsively on window resize', async () => {
    const page = await global.browser.newPage();
    await page.goto('http://localhost/dashboard');
    await page.setViewport({ width: 375, height: 667 });
    const bannerRect = await page.evaluate(() => {
      const banner = document.querySelector('#notificationBanner');
      return banner.getBoundingClientRect();
    });
    expect(bannerRect.width).to.be.lessThan(375);
  });
});