/*
{
  "test_case_id": "TC003",
  "description": "Validate that the user profile table schema has been updated with new fields and maintains backward compatibility.",
  "preconditions": "Database migration has been applied on a test database.",
  "steps_to_execute": [
    "Connect to the test database using a SQL client.",
    "Run a DESCRIBE command (or equivalent) on the user profile table.",
    "Verify that all new fields are present and existing fields remain unaltered."
  ],
  "expected_result": "The table schema includes all new columns as per the design specifications along with correct data types, and no legacy data is lost.",
  "actual_result": "",
  "status": "",
  "comments": "Use migration logs to compare schema changes."
}
*/

-- SQL test script
DESCRIBE user_profile;

-- Expected output example:
-- Field         Type        Null Key Default
-- id            INT         NO   PRI  AUTO_INCREMENT
-- email         VARCHAR(255) NO       
-- password      VARCHAR(255) NO       
-- new_field     TEXT        YES      
-- ...

-- Alternatively, for MySQL use:
SHOW COLUMNS FROM user_profile;