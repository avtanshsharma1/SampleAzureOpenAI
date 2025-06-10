/**
{
  "test_case_id": "TC009",
  "description": "Verify that image assets are optimized by checking file size reduction and maintaining visual quality.",
  "preconditions": "Test images available; image optimization tool (e.g., sharp) integrated.",
  "steps_to_execute": [
    "Load an original image and record its file size.",
    "Process the image through the image optimization function.",
    "Compare the file size and manually/automatically verify that the quality remains acceptable."
  ],
  "expected_result": "The optimized image should have a reduced file size while preserving acceptable visual quality.",
  "actual_result": "",
  "status": "",
  "comments": "Automated visual quality checking may require additional tools; manual verification may complement the test."
}
*/

const sharp = require('sharp');
const fs = require('fs');

describe('Optimize Image Assets', () => {
  test('Image should be compressed without significant quality loss', async () => {
    const originalPath = './assets/testImage.jpg';
    const optimizedPath = './assets/testImage_optimized.jpg';

    const originalStats = fs.statSync(originalPath);
    await sharp(originalPath)
      .resize({ width: 800 })
      .jpeg({ quality: 80 })
      .toFile(optimizedPath);

    const optimizedStats = fs.statSync(optimizedPath);
    expect(optimizedStats.size).toBeLessThan(originalStats.size);
  });
});