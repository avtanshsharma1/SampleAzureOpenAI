/**
{
  "test_case_id": "TC001_BASV_ValidCredentials",
  "description": "Verify that valid user credentials return a secure authentication token.",
  "preconditions": "Authentication API is running and the database contains valid user records.",
  "steps_to_execute": [
    "Send an API request with valid user credentials (username/password).",
    "Observe the output and validate the response token format."
  ],
  "expected_result": "The API returns a valid authentication token and a success message.",
  "actual_result": "",
  "status": "",
  "comments": "Token format should comply with security guidelines and expiration policy."
}
*/

// Using Mocha and Chai to test authentication with valid credentials
const { expect } = require('chai');
const request = require('supertest');

describe('Backend Authentication Service - Valid Credentials', () => {
  it('should return an auth token for valid credentials', async () => {
    const response = await request('http://localhost:3000')
      .post('/auth/login')
      .send({ username: 'validUser', password: 'validPass' });
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('token');
    expect(response.body.token).to.be.a('string');
  });
});