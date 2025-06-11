/**
{
  "test_case_id": "TC006",
  "description": "Validate that the new authentication module correctly authenticates valid tokens and rejects invalid ones.",
  "preconditions": "The authentication module is deployed; API endpoints secured with OAuth are active.",
  "steps_to_execute": [
    "Send an API request with a valid token and verify authentication succeeds.",
    "Send an API request with an invalid/expired token and verify the request is rejected.",
    "Check that appropriate errors and success messages are logged."
  ],
  "expected_result": "Valid tokens grant access (response status 200) while invalid tokens trigger a 401 unauthorized error with proper error message.",
  "actual_result": "",
  "status": "",
  "comments": "Security and error handling are tested; penetration testing may be required additionally."
}
*/

const request = require('supertest');
const app = require('../app');

describe('Authentication Module Test', () => {
  it('should allow access with a valid token', async () => {
    const validToken = 'VALID_TOKEN_SAMPLE';
    const response = await request(app)
      .get('/api/protected')
      .set('Authorization', `Bearer ${validToken}`);
    expect(response.status).toBe(200);
  });

  it('should reject access with an invalid token', async () => {
    const invalidToken = 'INVALID_TOKEN_SAMPLE';
    const response = await request(app)
      .get('/api/protected')
      .set('Authorization', `Bearer ${invalidToken}`);
    expect(response.status).toBe(401);
  });
});
