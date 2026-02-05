/**
 * generate_persona tool
 * ゴールドペルソナ生成
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function generatePersona(brain, args) {
  const { task_description, genre } = args;

  // PersonaManager経由でペルソナ生成
  const PersonaManager = (await import(path.resolve(__dirname, '../../lib/persona-manager.js'))).default;
  const personaManager = new PersonaManager(path.resolve(__dirname, '../../atob-brain.db'));
  await personaManager.initialize();

  const persona = await personaManager.getPersona(task_description, { genre });

  return {
    task: task_description,
    selected_persona: persona.task_type,
    persona_config: persona.persona_config,
    is_dynamic: persona.persona_config?.persona?.is_dynamic || false,
    usage_notes: persona.usage_notes
  };
}
