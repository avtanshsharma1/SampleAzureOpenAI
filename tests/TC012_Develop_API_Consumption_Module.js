/**
{
  "test_case_id": "TC012",
  "description": "Verify that the frontend module correctly fetches data from the new reporting API endpoints and displays it.",
  "preconditions": "Reporting API endpoints are active; frontend environment is configured.",
  "steps_to_execute": [
    "Load the reporting interface in the frontend application.",
    "Trigger the API call to fetch reporting data.",
    "Examine the UI to ensure that the data is rendered correctly and error messages are handled."
  ],
  "expected_result": "The API consumption module fetches the correct data and visual components display the reports accurately, with graceful handling of any errors.",
  "actual_result": "",
  "status": "",
  "comments": "Ensure proper asynchronous handling is verified."
}
*/

const assert = require('assert');
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('http://localhost:3000/api/reporting/data');
  const data = await response.json();
  assert(response.status === 200, 'Response should be 200 OK');
  assert(data && data.reports, 'Response should contain reports data');
  console.log('TC012 executed successfully');
})();