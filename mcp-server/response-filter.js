/**
 * Response Filter
 * Ensures outputs comply with system constraints
 */

/**
 * Filter response to ensure no sensitive information is leaked
 */
export function filterResponse(result) {
  // Basic filtering - remove any internal details
  if (typeof result === 'object' && result !== null) {
    const filtered = { ...result };
    
    // Remove internal processing details
    delete filtered.internal_thinking;
    delete filtered.iteration_count;
    delete filtered.internal_scores;
    
    return filtered;
  }
  
  return result;
}

/**
 * Filter error messages to hide internal structure
 */
export function filterError(error) {
  // Hide internal file paths and structure
  const message = error.message || 'An error occurred';
  
  // Remove absolute paths
  const filtered = message.replace(/\/Users\/[^\/]+\/.*?\//g, '[internal]/');
  
  return {
    error: filtered,
    type: error.name || 'Error'
  };
}
