/**
 * auto_judge tool
 * 自動判定システム
 */

export default async function autoJudge(brain, args) {
  const { task, context = {} } = args;

  // Auto Judgmentで完全自動判定
  const judgment = await brain.autoJudgment.judgeAll(task, context);

  return {
    task,
    judgment: {
      needs_golden_ticket: judgment.needsGoldenTicket,
      needs_deep_thinking: judgment.needsDeepThinking,
      recommended_persona: judgment.persona,
      priority: judgment.priority,
      complexity: judgment.complexity,
      business_impact: judgment.businessImpact,
      recommended_strategy: judgment.recommendedStrategy
    },
    actions: {
      auto_trigger_golden_ticket: judgment.needsGoldenTicket,
      auto_trigger_deep_thinking: judgment.needsDeepThinking
    },
    timestamp: judgment.timestamp
  };
}
