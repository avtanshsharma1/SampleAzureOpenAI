"""
{
  "test_case_id": "TC010",
  "description": "Simulate high load conditions on the refactored API endpoints and verify that average response times remain within acceptable limits.",
  "preconditions": "Load testing framework or script is available; refactored endpoints are running under test conditions.",
  "steps_to_execute": [
    "Use a load testing tool or script to simulate a high number of concurrent requests (e.g., 1000 requests).",
    "Collect metrics on average response time and error rate.",
    "Verify that the average response time is below the defined threshold and error rate is minimal."
  ],
  "expected_result": "Under load conditions, the API endpoints sustain an average response time below the threshold (e.g., 500 ms) with low error rates.",
  "actual_result": "",
  "status": "",
  "comments": "This test may use a dedicated load testing library like locust or a custom script."
}
"""

import unittest
import requests
from concurrent.futures import ThreadPoolExecutor

class TestLoad(unittest.TestCase):
    def test_api_under_load(self):
        url = 'http://localhost:5000/api/data'
        num_requests = 50  # Reduced number for demonstration; increase as needed

        def make_request():
            response = requests.get(url)
            return response.elapsed.total_seconds() * 1000  # in ms

        with ThreadPoolExecutor(max_workers=10) as executor:
            response_times = list(executor.map(lambda _: make_request(), range(num_requests)))

        average_time = sum(response_times) / len(response_times)
        self.assertLess(average_time, 500, f'Average response time too high: {average_time} ms')

if __name__ == '__main__':
    unittest.main()