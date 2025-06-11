"""
{
  "test_case_id": "TC008",
  "description": "Measure and verify that dashboard load times are reduced and cache mechanisms are effective after optimization.",
  "preconditions": "Performance optimizations implemented and monitoring tools configured.",
  "steps_to_execute": [
    "Access the dashboard and record the initial page load time.",
    "Simulate multiple requests to trigger caching.",
    "Compare load times before and after cache hit."
  ],
  "expected_result": "Dashboard loads faster (e.g., under a specified threshold) when cached, and performance metrics meet baseline improvements.",
  "actual_result": "",
  "status": "",
  "comments": "Result should be validated against predefined performance benchmarks."
}
"""

import requests
import time


def test_dashboard_performance():
    url = 'http://localhost:3000/dashboard'
    # First load to warm up
    start = time.time()
    requests.get(url)
    first_load = time.time() - start

    # Second load expected to be faster due to caching
    start = time.time()
    requests.get(url)
    second_load = time.time() - start

    assert second_load < first_load, 'Cached load time should be less than initial load'
    print('TC008 executed successfully: first_load = {} sec, second_load = {} sec'.format(first_load, second_load))

if __name__ == '__main__':
    test_dashboard_performance()