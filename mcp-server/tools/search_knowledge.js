/**
 * search_knowledge tool
 * RAG知識検索
 */

export default async function searchKnowledge(brain, args) {
  const { query } = args;

  // BrainUnderstandingの強化検索
  const results = await brain.brain.searchKnowledgeEnhanced(query, {
    limit: 10
  });

  return {
    query,
    results_count: results.length,
    results: results.map(r => ({
      content: r.content,
      category: r.category,
      score: r.score,
      metadata: r.metadata
    })),
    timestamp: new Date().toISOString()
  };
}
