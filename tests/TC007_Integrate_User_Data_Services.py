"""
{
  "test_case_id": "TC007",
  "description": "Verify that the backend data aggregation service correctly fetches and processes user data from various sources.",
  "preconditions": "Backend data endpoints and integration modules are deployed and connected.",
  "steps_to_execute": [
    "Send a request to the user data API endpoint.",
    "Validate that the response contains aggregated user data in the expected format.",
    "Simulate load conditions to measure response time."
  ],
  "expected_result": "The API returns accurate aggregated data with acceptable response times, meeting load test criteria.",
  "actual_result": "",
  "status": "",
  "comments": "Load testing can be augmented with dedicated tools."
}
"""

import requests
import time


def test_user_data_integration():
    url = 'http://localhost:3000/api/user/data'
    start = time.time()
    response = requests.get(url)
    duration = time.time() - start
    data = response.json()
    assert response.status_code == 200, 'Expected status code 200'
    assert 'userProfile' in data, 'Aggregated data should contain userProfile key'
    assert duration < 2, 'Response time should be under 2 seconds'
    print('TC007 executed successfully')

if __name__ == '__main__':
    test_user_data_integration()