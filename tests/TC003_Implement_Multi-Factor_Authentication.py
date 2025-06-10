"""
{
  "test_case_id": "TC003",
  "description": "Verify that a valid MFA token allows successful authentication.",
  "preconditions": "Backend server is running and MFA service is configured; valid user credentials and valid MFA token available.",
  "steps_to_execute": [
    "Call the authentication API with valid username, password, and MFA token.",
    "Inspect the API response for successful authentication status."
  ],
  "expected_result": "API returns a success status with a valid session token.",
  "actual_result": "",
  "status": "",
  "comments": "Tests proper integration of MFA and token verification."
}
"""

import unittest
import requests

class TestMFAAuthentication(unittest.TestCase):
    def test_valid_mfa_token(self):
        url = 'http://localhost:5000/api/authenticate'
        payload = {
            'username': 'testuser',
            'password': 'password123',
            'mfa_token': 'VALID_TOKEN'
        }
        response = requests.post(url, json=payload)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data.get('success'))
        self.assertIn('sessionToken', data)

if __name__ == '__main__':
    unittest.main()