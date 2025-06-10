"""
{
  "test_case_id": "TC004",
  "description": "Verify that an invalid MFA token results in authentication failure.",
  "preconditions": "Backend server is running; user credentials are valid; an invalid MFA token is available.",
  "steps_to_execute": [
    "Call the authentication API with valid username, password but an invalid MFA token.",
    "Inspect the API response for an error message regarding MFA validation failure."
  ],
  "expected_result": "API returns an error status (e.g., HTTP 401) with a message indicating invalid MFA token.",
  "actual_result": "",
  "status": "",
  "comments": "Ensures MFA integration prevents unauthorized access."
}
"""

import unittest
import requests

class TestMFAAuthenticationInvalidToken(unittest.TestCase):
    def test_invalid_mfa_token(self):
        url = 'http://localhost:5000/api/authenticate'
        payload = {
            'username': 'testuser',
            'password': 'password123',
            'mfa_token': 'INVALID_TOKEN'
        }
        response = requests.post(url, json=payload)
        self.assertEqual(response.status_code, 401)
        data = response.json()
        self.assertFalse(data.get('success'))
        self.assertEqual(data.get('error'), 'Invalid MFA token')

if __name__ == '__main__':
    unittest.main()