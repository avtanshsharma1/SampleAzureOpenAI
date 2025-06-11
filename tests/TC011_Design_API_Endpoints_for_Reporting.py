"""
{
  "test_case_id": "TC011",
  "description": "Ensure that the API design document reflects endpoints that provide aggregated reporting data.",
  "preconditions": "API design document is produced and accessible.",
  "steps_to_execute": [
    "Review the API design document.",
    "Verify that endpoints for reporting are clearly documented with expected input/output conditions.",
    "Check that security middleware and authentication protocols are specified."
  ],
  "expected_result": "API design document includes comprehensive details for each reporting endpoint including parameters, expected responses, and security layers.",
  "actual_result": "",
  "status": "",
  "comments": "This test case may involve manual verification of documentation."
}
"""

# Pseudo-code for validating API design document template

def test_api_design_document():
    with open('api_design_document.json', 'r') as file:
        api_doc = file.read()
    assert 'reporting' in api_doc, 'API design document should contain reporting endpoints'
    assert 'authentication' in api_doc, 'API design document should include security details'
    print('TC011 executed successfully')

if __name__ == '__main__':
    test_api_design_document()