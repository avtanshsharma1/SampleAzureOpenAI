"""
{
  "test_case_id": "TC003",
  "description": "Verify that valid credentials are authenticated and an authentication token is returned.",
  "preconditions": "Backend authentication service is running with encryption module enabled.",
  "steps_to_execute": [
    "Send a POST request with valid email and password to the authentication endpoint.",
    "Capture the response token from the backend."
  ],
  "expected_result": "A valid authentication token (JWT or similar) is returned with a 200 status code.",
  "actual_result": "",
  "status": "",
  "comments": "Test should also check token format and expiry fields."
}
"""

import requests

def test_valid_authentication():
    url = 'http://localhost:3000/api/auth/login'
    payload = {"email": "user@example.com", "password": "validPassword123"}
    response = requests.post(url, json=payload)
    assert response.status_code == 200, 'Expected status code 200'
    token = response.json().get('token')
    assert token is not None, 'Token should be returned'
    print('TC003 executed successfully')

if __name__ == '__main__':
    test_valid_authentication()