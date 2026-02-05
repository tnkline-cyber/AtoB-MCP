/**
 * store_learning tool
 * Learning Log記録
 * 
 * Simplified learning storage directly to database.
 * For advanced feedback loops, Golden Ticket System handles automatically.
 */

export default async function storeLearning(brain, args) {
  const { task, outcome, insights } = args;

  // Store learning record directly to database
  const timestamp = new Date().toISOString();
  const insightsJson = JSON.stringify(insights || []);
  
  try {
    // Create learning_log table if not exists
    await brain.db.run(`
      CREATE TABLE IF NOT EXISTS learning_log (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL,
        outcome TEXT NOT NULL,
        insights TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Insert learning record
    await brain.db.run(
      'INSERT INTO learning_log (task, outcome, insights, timestamp) VALUES (?, ?, ?, ?)',
      [task, outcome, insightsJson, timestamp]
    );
    
    return {
      success: true,
      task,
      outcome,
      insights_count: insights ? insights.length : 0,
      message: 'Learning successfully stored to internal database',
      timestamp
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      task,
      timestamp
    };
  }
}
