/**
{
  "test_case_id": "TC006",
  "description": "Verify that database indexes are created as per the defined indexing strategy to improve query execution times.",
  "preconditions": "Indexing strategies documented and applied on a test database.",
  "steps_to_execute": [
    "Run a set of queries before applying new indexes and record execution times.",
    "Apply the indexing strategy (e.g., create indexes on designated columns).",
    "Run the same set of queries and compare execution times."
  ],
  "expected_result": "The queries run significantly faster after indexing; indexes exist on the intended columns.",
  "actual_result": "",
  "status": "",
  "comments": "Benchmark improvements should meet predetermined KPI thresholds."
}
*/

const { execQuery } = require('../db');

async function checkIndexExists(table, indexName) {
  const query = `SHOW INDEX FROM ${table} WHERE Key_name = '${indexName}'`;
  const result = await execQuery(query);
  return result.length > 0;
}

describe('Database Indexing Strategies', () => {
  test('Indexes should improve query performance', async () => {
    const query = 'SELECT * FROM orders WHERE customer_id = 123';
    const startBefore = Date.now();
    await execQuery(query);
    const durationBefore = Date.now() - startBefore;

    // Apply index
    await execQuery('CREATE INDEX idx_customer_id ON orders(customer_id)');

    const startAfter = Date.now();
    await execQuery(query);
    const durationAfter = Date.now() - startAfter;

    expect(durationAfter).toBeLessThan(durationBefore);
    const indexExists = await checkIndexExists('orders', 'idx_customer_id');
    expect(indexExists).toBe(true);
  });
});