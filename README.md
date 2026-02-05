# AtoB-MCP (AI to Brain Model Context Protocol)

A high-performance MCP server that provides advanced AI capabilities through integrated brain-like processing, including context understanding, quality assurance, and intelligent decision-making.

## Overview

AtoB-MCP transforms AI interactions by integrating sophisticated processing layers that work together to deliver consistently high-quality outputs. The system combines natural language understanding, memory management, decision optimization, and automatic quality control.

## Features

### Core Capabilities

1. **Task Analysis**
   - Deep context understanding
   - Intent recognition
   - Complexity evaluation
   - Optimal path discovery

2. **Persona Generation**
   - Task-optimized personas
   - Dynamic adaptation
   - Specialized expertise selection

3. **Quality Evaluation**
   - 95%+ quality guarantee
   - Multi-criteria assessment
   - Automatic regeneration when needed

4. **Learning & Memory**
   - Persistent knowledge storage
   - Error pattern recognition
   - Solution repository
   - Continuous improvement

5. **Knowledge Search**
   - RAG (Retrieval-Augmented Generation)
   - Context-aware retrieval
   - Relevance scoring

6. **Golden Ticket System**
   - Premium quality assurance
   - Four-phase enhancement process
   - Automatic triggering for critical tasks

7. **Deep Thinking Mode**
   - Step-by-step reasoning
   - Complex problem solving
   - Integration with sequential-thinking MCP

8. **Auto Judgment**
   - Automatic complexity assessment
   - Smart system activation
   - Resource optimization

## Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Cursor IDE (for MCP integration)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/[tnkline-cyber]/AtoB-MCP.git
cd AtoB-MCP
```

2. Install dependencies:
```bash
npm install
```

3. Configure MCP settings in Cursor:

Add to your `~/.cursor/mcp.json`:
```json
{
  "mcpServers": {
    "atob-system": {
      "command": "node",
      "args": [
        "/path/to/AtoB-MCP/mcp-server/server.js"
      ]
    }
  }
}
```

4. Restart Cursor to load the MCP server.

## Usage

### Available MCP Tools

#### analyze_task
Analyzes tasks and provides optimal approaches.

```javascript
{
  "task_description": "Your task description",
  "context": {
    "project": "project-name",
    "priority": "high"
  }
}
```

#### generate_persona
Generates task-optimized personas.

```javascript
{
  "task_description": "Your task description",
  "genre": "web-development"
}
```

#### evaluate_quality
Evaluates output quality with 95%+ guarantee.

```javascript
{
  "content": "Content to evaluate"
}
```

#### store_learning
Records learning experiences.

```javascript
{
  "task": "Task description",
  "outcome": "success",
  "insights": ["insight1", "insight2"]
}
```

#### search_knowledge
Searches knowledge base with RAG.

```javascript
{
  "query": "Search query"
}
```

#### trigger_golden_ticket
Activates premium quality assurance.

```javascript
{
  "task": "Task description",
  "context": {
    "performance": true,
    "security": true
  }
}
```

#### trigger_deep_thinking
Activates deep reasoning mode.

```javascript
{
  "problem": "Problem to solve",
  "context": {}
}
```

#### auto_judge
Automatically determines optimal processing strategy.

```javascript
{
  "task": "Task description",
  "context": {
    "production": true,
    "users": 100000
  }
}
```

## Architecture

### High-Level Design

```
User Request
    ↓
Auto Judgment (complexity assessment)
    ↓
Decision Engine (optimal path discovery)
    ↓
Persona Selection (task optimization)
    ↓
Golden Ticket System (quality assurance)
    ↓
High-Quality Output (95%+ guaranteed)
```

### Key Components

- **Context Processor**: Enriches understanding with multi-dimensional analysis
- **Memory System**: Maintains persistent knowledge and learning history
- **Quality Assurance**: Multi-criteria evaluation with automatic enhancement
- **Decision Engine**: Optimizes processing strategies based on task characteristics

## Configuration

The system automatically adapts to task requirements. Advanced configuration options are available through the MCP interface.

## Integration

### With Other MCPs

AtoB-MCP integrates seamlessly with:
- `memory` MCP for enhanced knowledge storage
- `sequential-thinking` MCP for deep reasoning
- Standard MCP tools (filesystem, github, etc.)

### In Your Workflow

1. Task submission triggers automatic analysis
2. System selects optimal processing strategy
3. Quality assurance activates when needed
4. Results are delivered with confidence scoring
5. Learnings are automatically recorded

## Performance

- Quality guarantee: 95%+ across all criteria
- Automatic optimization based on task complexity
- Intelligent resource allocation
- Continuous learning and improvement

## Support

For questions, issues, or feature requests, please open an issue on GitHub.

## License

MIT License - see LICENSE file for details

## Contributing

Contributions are welcome. Please open an issue first to discuss proposed changes.

---

Built with advanced AI processing techniques for consistently high-quality outputs.
