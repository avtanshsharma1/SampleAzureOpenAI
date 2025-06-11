/**
{
  "test_case_id": "TC002_BASV_InvalidCredentials",
  "description": "Verify that invalid credentials are handled securely and return an error message.",
  "preconditions": "Authentication service is running.",
  "steps_to_execute": [
    "Send an API request with invalid credentials (wrong username/password).",
    "Observe the response for error message and secure handling (no token returned)."
  ],
  "expected_result": "The API returns an error message with an appropriate HTTP error code (e.g., 401 Unauthorized) and no token.",
  "actual_result": "",
  "status": "",
  "comments": "Ensure that no sensitive data is leaked in the error response."
}
*/

// Test invalid credentials for Authentication Service using Mocha, Chai, and Supertest
const { expect } = require('chai');
const request = require('supertest');

describe('Backend Authentication Service - Invalid Credentials', () => {
  it('should deny access for invalid credentials', async () => {
    const response = await request('http://localhost:3000')
      .post('/auth/login')
      .send({ username: 'invalidUser', password: 'invalidPass' });
    expect(response.status).to.equal(401);
    expect(response.body).to.not.have.property('token');
    expect(response.body.error).to.be.a('string');
  });
});