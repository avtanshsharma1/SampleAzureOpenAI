/**
{
  "test_case_id": "TC001_IPAPI_SuccessfulUpdate",
  "description": "Test that a valid profile update request returns a confirmation response.",
  "preconditions": "Profile API endpoint is active and user is authenticated.",
  "steps_to_execute": [
    "Send a valid profile update request to the API with updated data.",
    "Check that the response confirms the update with a status code of 200."
  ],
  "expected_result": "API response returns a confirmation message and updated profile data.",
  "actual_result": "",
  "status": "",
  "comments": "Ensure the API handles data formatting according to the new schema."
}
*/

// Test profile API integration using Supertest and Mocha
const { expect } = require('chai');
const request = require('supertest');

describe('Profile API - Successful Update', () => {
  it('should update profile with valid data', async () => {
    const response = await request('http://localhost:3000')
      .put('/profile/update')
      .send({ displayName: 'Updated Name', email: 'user@example.com' })
      .set('Authorization', 'Bearer validToken');
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message', 'Profile updated successfully');
  });
});