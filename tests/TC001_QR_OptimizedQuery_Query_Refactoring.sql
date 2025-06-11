/*
{
  "test_case_id": "TC001_QR_OptimizedQuery",
  "description": "Ensure that the refactored query returns the correct data set efficiently.",
  "preconditions": "Backend has deployed refactored queries and database is populated with test data.",
  "steps_to_execute": [
    "Execute the refactored SQL query via the API endpoint or directly in the database.",
    "Verify the returned data for completeness and correctness."
  ],
  "expected_result": "The query returns the expected records with improved execution time and no regression in result accuracy.",
  "actual_result": "",
  "status": "",
  "comments": "Compare with historical query results to ensure data integrity."
}
*/

-- Example refactored query for user data
EXPLAIN ANALYZE SELECT id, email FROM users WHERE status = 'active';