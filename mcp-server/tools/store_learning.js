/**
 * store_learning tool
 * Learning Log記録
 */

export default async function storeLearning(brain, args) {
  const { task, outcome, insights } = args;

  // BrainUnderstandingで学習記録
  // Use learnFromFeedback method (actual implementation)
  await brain.brain.learnFromFeedback(
    { type: task, context: task },
    outcome,
    outcome === 'success' ? 0.9 : 0.3  // performanceScore
  );

  return {
    success: true,
    task,
    outcome,
    insights_count: insights ? insights.length : 0,
    message: 'Learning successfully stored via learnFromFeedback',
    timestamp: new Date().toISOString()
  };
}
