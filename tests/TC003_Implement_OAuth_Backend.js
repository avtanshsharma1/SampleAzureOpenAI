/**
{
  "test_case_id": "TC003",
  "description": "Verify that a valid OAuth request returns a generated token.",
  "preconditions": "Backend server is running; valid user credentials available.",
  "steps_to_execute": [
    "Send an HTTP POST request to the OAuth endpoint with valid credentials.",
    "Capture the response.",
    "Verify that the response contains an authentication token and a 200 status code."
  ],
  "expected_result": "The response returns a valid token (non-empty string) with status code 200.",
  "actual_result": "",
  "status": "",
  "comments": "Ensure the OAuth service is properly hooked into the Authentication Service."
}
*/

const request = require('supertest');
const app = require('../server'); // Path to your Express app

describe('Implement OAuth Backend', () => {
  test('Valid OAuth credentials should generate a token', async () => {
    const res = await request(app)
      .post('/api/oauth/token')
      .send({ username: 'validUser', password: 'validPassword' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.token).toBeDefined();
    expect(typeof res.body.token).toBe('string');
  });
});