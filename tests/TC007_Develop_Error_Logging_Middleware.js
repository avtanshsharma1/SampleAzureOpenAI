/**
{
  "test_case_id": "TC007",
  "description": "Verify that the error logging middleware captures errors and propagates an appropriate error response without leaking sensitive information.",
  "preconditions": "Backend server with error logging middleware is running; an endpoint exists that triggers an error.",
  "steps_to_execute": [
    "Call an API endpoint that is configured to generate an error.",
    "Observe whether the error is logged with sufficient context in the logs.",
    "Verify that the API returns a safe error response with correct HTTP status code (e.g., 500)."
  ],
  "expected_result": "Error is captured and logged internally (without sensitive details) and the API responds with a proper error message and a 500 status code.",
  "actual_result": "",
  "status": "",
  "comments": "Logs should be reviewed manually if automated log inspection is not in place."
}
*/

const request = require('supertest');
const app = require('../app'); // Express app with logging middleware

describe('Error Logging Middleware', () => {
  test('should log errors and return a 500 error response', async () => {
    const res = await request(app)
      .get('/api/trigger-error')
      .expect(500);
    expect(res.body).toHaveProperty('error');
  });
});