/**
{
  "test_case_id": "TC002_IPAPI_UnauthorizedUpdate",
  "description": "Ensure that an unauthorized update attempt returns an error.",
  "preconditions": "Profile API endpoint is active; user not authenticated or using invalid token.",
  "steps_to_execute": [
    "Send a profile update request without a valid authentication token.",
    "Observe the API response for an error message and 401 status code."
  ],
  "expected_result": "API returns a 401 Unauthorized error with an appropriate error message and no profile updates.",
  "actual_result": "",
  "status": "",
  "comments": "This test checks that authentication validations are properly enforced."
}
*/

// Using Mocha and Supertest to check unauthorized profile update
const { expect } = require('chai');
const request = require('supertest');

describe('Profile API - Unauthorized Update', () => {
  it('should respond with 401 when no token is provided', async () => {
    const response = await request('http://localhost:3000')
      .put('/profile/update')
      .send({ displayName: 'Hacker Name' });
    expect(response.status).to.equal(401);
    expect(response.body.error).to.be.a('string');
  });
});