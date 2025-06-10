/**
{
  "test_case_id": "TC004",
  "description": "Verify that invalid credentials return an error message with the proper error status code.",
  "preconditions": "Backend OAuth service running; invalid credentials available.",
  "steps_to_execute": [
    "Send an HTTP POST request to the OAuth endpoint with invalid credentials.",
    "Capture the response.",
    "Verify that the response contains an error message and an appropriate error status (e.g., 401)."
  ],
  "expected_result": "The response returns a 401 status code with an error message indicating invalid credentials.",
  "actual_result": "",
  "status": "",
  "comments": ""
}
*/

const request = require('supertest');
const app = require('../server');

describe('OAuth Backend Error Handling', () => {
  test('Invalid credentials should return an error', async () => {
    const res = await request(app)
      .post('/api/oauth/token')
      .send({ username: 'invalidUser', password: 'wrongPassword' });

    expect(res.statusCode).toEqual(401);
    expect(res.body.error).toBeDefined();
  });
});