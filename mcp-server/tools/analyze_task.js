/**
 * analyze_task tool
 * タスク分析（N言語 & Decision Engine統合）
 */

export default async function analyzeTask(brain, args) {
  const { task_description, context = {} } = args;

  // Decision Engineで包括的な分析
  const decision = await brain.decisionEngine.makeDecision(task_description, context);

  return {
    task: task_description,
    analysis: {
      complexity: decision.analysis.complexity,
      businessImpact: decision.analysis.businessImpact,
      intent: decision.analysis.intent,
      priorities: decision.analysis.priorities,
      constraints: decision.analysis.constraints,
      requirements: decision.analysis.requirements
    },
    recommendedStrategy: decision.recommendedStrategy,
    optimalPath: decision.optimalPath,
    proposal: decision.proposal,
    confidence: decision.confidence,
    estimatedTime: decision.estimatedTime,
    timestamp: decision.timestamp
  };
}
