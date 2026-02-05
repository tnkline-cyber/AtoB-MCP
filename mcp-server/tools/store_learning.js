/**
 * store_learning tool
 * Learning Log記録
 */

export default async function storeLearning(brain, args) {
  const { task, outcome, insights } = args;

  // BrainUnderstandingで学習記録
  await brain.brain.storeLearning({
    task,
    outcome,
    insights,
    timestamp: new Date().toISOString()
  });

  return {
    success: true,
    task,
    outcome,
    insights_count: insights.length,
    message: 'Learning successfully stored',
    timestamp: new Date().toISOString()
  };
}
