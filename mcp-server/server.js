#!/usr/bin/env node

/**
 * atob-system MCP Server
 * 統合AIブレインシステムのMCPサーバー
 * 
 * 提供ツール:
 * 1. analyze_task - タスク分析
 * 2. generate_persona - ペルソナ生成
 * 3. evaluate_quality - 品質評価
 * 4. store_learning - 学習記録
 * 5. search_knowledge - 知識検索
 * 6. trigger_golden_ticket - Golden Ticket起動
 * 7. trigger_deep_thinking - Deep Thinking起動
 * 8. auto_judge - 自動判定
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import IntegratedBrain from parent directory
const brainCorePath = path.resolve(__dirname, '../brain-core/integrated-brain.js');
const IntegratedBrain = (await import(brainCorePath)).default;

// Import tool handlers
import analyzeTask from './tools/analyze_task.js';
import generatePersona from './tools/generate_persona.js';
import evaluateQuality from './tools/evaluate_quality.js';
import storeLearning from './tools/store_learning.js';
import searchKnowledge from './tools/search_knowledge.js';
import triggerGoldenTicket from './tools/trigger_golden_ticket.js';
import triggerDeepThinking from './tools/trigger_deep_thinking.js';
import autoJudge from './tools/auto_judge.js';

// Import response filter
import { filterResponse, filterError } from './response-filter.js';

// Initialize IntegratedBrain
const dbPath = path.resolve(__dirname, '../atob-brain.db');
const brain = new IntegratedBrain(dbPath);
await brain.initialize();

console.error('✅ atob-system MCP Server: IntegratedBrain initialized');

// Create MCP Server
const server = new Server(
  {
    name: 'atob-system',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Tool definitions
const tools = [
  {
    name: 'analyze_task',
    description: 'タスクを分析し、最適なアプローチを提案します（N言語 & 脳理解統合）',
    inputSchema: {
      type: 'object',
      properties: {
        task_description: {
          type: 'string',
          description: 'タスクの説明',
        },
        context: {
          type: 'object',
          description: 'プロジェクトのコンテキスト',
        },
      },
      required: ['task_description'],
    },
  },
  {
    name: 'generate_persona',
    description: 'タスクに最適化されたゴールドペルソナを生成します',
    inputSchema: {
      type: 'object',
      properties: {
        task_description: {
          type: 'string',
          description: 'タスクの説明',
        },
        genre: {
          type: 'string',
          description: 'ジャンル（web-development, ai-ml, etc.）',
        },
      },
      required: ['task_description'],
    },
  },
  {
    name: 'evaluate_quality',
    description: 'Golden Ticket Systemで品質を評価します（95%+保証）',
    inputSchema: {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          description: '評価する内容',
        },
      },
      required: ['content'],
    },
  },
  {
    name: 'store_learning',
    description: 'Learning Logを記録します（脳理解統合）',
    inputSchema: {
      type: 'object',
      properties: {
        task: {
          type: 'string',
          description: 'タスクの説明',
        },
        outcome: {
          type: 'string',
          description: '結果（success/failure）',
        },
        insights: {
          type: 'array',
          items: {
            type: 'string',
          },
          description: '学習内容',
        },
      },
      required: ['task', 'outcome', 'insights'],
    },
  },
  {
    name: 'search_knowledge',
    description: 'RAGで過去の知識を検索します',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: '検索クエリ',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'trigger_golden_ticket',
    description: 'Golden Ticket System（4フェーズ品質保証プロセス）を起動',
    inputSchema: {
      type: 'object',
      properties: {
        task: {
          type: 'string',
          description: 'タスクの説明',
        },
        context: {
          type: 'object',
          description: 'コンテキスト情報',
        },
        test_mode: {
          type: 'boolean',
          description: 'テストモード（trueの場合は簡易実行）',
        },
      },
      required: ['task'],
    },
  },
  {
    name: 'trigger_deep_thinking',
    description: 'Deep Thinking Mode（sequential-thinking MCP連携）を起動',
    inputSchema: {
      type: 'object',
      properties: {
        problem: {
          type: 'string',
          description: '解決したい問題',
        },
        context: {
          type: 'object',
          description: 'コンテキスト情報',
        },
      },
      required: ['problem'],
    },
  },
  {
    name: 'auto_judge',
    description: '自動判定システム（Golden Ticket & Deep Thinking起動判定）',
    inputSchema: {
      type: 'object',
      properties: {
        task: {
          type: 'string',
          description: 'タスクの説明',
        },
        context: {
          type: 'object',
          description: 'コンテキスト情報',
        },
      },
      required: ['task'],
    },
  },
];

// List tools handler
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools };
});

// Call tool handler
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    let result;

    switch (name) {
      case 'analyze_task':
        result = await analyzeTask(brain, args);
        break;
      case 'generate_persona':
        result = await generatePersona(brain, args);
        break;
      case 'evaluate_quality':
        result = await evaluateQuality(brain, args);
        break;
      case 'store_learning':
        result = await storeLearning(brain, args);
        break;
      case 'search_knowledge':
        result = await searchKnowledge(brain, args);
        break;
      case 'trigger_golden_ticket':
        result = await triggerGoldenTicket(brain, args);
        break;
      case 'trigger_deep_thinking':
        result = await triggerDeepThinking(brain, args);
        break;
      case 'auto_judge':
        result = await autoJudge(brain, args);
        break;
      default:
        throw new Error(`Unknown tool: ${name}`);
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  } catch (error) {
    console.error(`Error executing tool ${name}:`, error);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ error: error.message }, null, 2),
        },
      ],
      isError: true,
    };
  }
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);

console.error('🚀 atob-system MCP Server running');
