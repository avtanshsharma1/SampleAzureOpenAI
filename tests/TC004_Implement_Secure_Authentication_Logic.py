"""
{
  "test_case_id": "TC004",
  "description": "Ensure that invalid credentials produce an error and no token is issued.",
  "preconditions": "Backend authentication service available.",
  "steps_to_execute": [
    "Send a POST request with invalid credentials (e.g., wrong password).",
    "Check the response for error messages and status code."
  ],
  "expected_result": "Error response with status code 401 or similar, and no token in the response.",
  "actual_result": "",
  "status": "",
  "comments": "Security aspect is validated by ensuring no token leakage."
}
"""

import requests

def test_invalid_authentication():
    url = 'http://localhost:3000/api/auth/login'
    payload = {"email": "user@example.com", "password": "wrongPassword"}
    response = requests.post(url, json=payload)
    assert response.status_code in [401, 403], 'Expected authentication failure status code'
    assert 'token' not in response.json(), 'Token should not be included in response'
    print('TC004 executed successfully')

if __name__ == '__main__':
    test_invalid_authentication()