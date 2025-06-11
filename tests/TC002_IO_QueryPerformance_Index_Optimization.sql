/*
{
  "test_case_id": "TC002_IO_QueryPerformance",
  "description": "Validate that optimized indexes improve query performance.",
  "preconditions": "Indexes are applied on tables; a performance benchmark is available.",
  "steps_to_execute": [
    "Run a set of typical queries before and after index optimization.",
    "Compare execution times and resource usage."
  ],
  "expected_result": "Queries should run at least 30% faster after index optimization, with consistent data outputs.",
  "actual_result": "",
  "status": "",
  "comments": "Benchmark tests should be repeated under similar load conditions."
}
*/

-- Example SQL for performance testing (explain analyze)
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';