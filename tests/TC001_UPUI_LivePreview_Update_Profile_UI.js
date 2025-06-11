/**
{
  "test_case_id": "TC001_UPUI_LivePreview",
  "description": "Ensure that changes to the profile fields are immediately reflected in the live preview.",
  "preconditions": "User is logged in and profile edit page is loaded.",
  "steps_to_execute": [
    "Navigate to the profile edit page.",
    "Update a text field (e.g., display name).",
    "Observe the live preview section for immediate reflection of changes."
  ],
  "expected_result": "The live preview area should update immediately reflecting the input without requiring a page reload.",
  "actual_result": "",
  "status": "",
  "comments": "Test using both valid and edge-case inputs to ensure robust handling."
}
*/

// Using Puppeteer to test live preview on profile update
const { expect } = require('chai');

describe('Profile UI - Live Preview', () => {
  it('should update the live preview as profile fields change', async () => {
    const page = await global.browser.newPage();
    await page.goto('http://localhost/profile/edit');
    await page.type('#displayName', 'New Name');
    // wait for live preview update
    await page.waitForFunction(() => document.querySelector('#livePreview').innerText.includes('New Name'));
    const previewText = await page.evaluate(() => document.querySelector('#livePreview').innerText);
    expect(previewText).to.include('New Name');
  });
});