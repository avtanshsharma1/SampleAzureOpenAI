/*
{
  "test_case_id": "TC001_IO_IndexCreation",
  "description": "Verify that indexes are created on key user and profile tables.",
  "preconditions": "Database schema update script has been executed.",
  "steps_to_execute": [
    "Query the database metadata for indexes on the users and profiles tables.",
    "Inspect that expected indexes exist and are correctly configured."
  ],
  "expected_result": "Indexes exist on key columns (e.g., user_id, email) for the users and profiles tables, boosting query performance.",
  "actual_result": "",
  "status": "",
  "comments": "A SQL script can be used to retrieve index information."
}
*/

-- Sample SQL to check index creation
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename IN ('users', 'profiles');