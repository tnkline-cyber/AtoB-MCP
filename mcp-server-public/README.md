# MCP Server Implementation

This directory contains the public interface for the AtoB-MCP server.

## Structure

```
mcp-server/
├── server.js           # Main MCP server entry point
└── tools/             # Tool definitions and interfaces
    └── README.md      # Tool documentation
```

## Server Implementation

The server provides eight integrated tools through the Model Context Protocol:

1. analyze_task
2. generate_persona
3. evaluate_quality
4. store_learning
5. search_knowledge
6. trigger_golden_ticket
7. trigger_deep_thinking
8. auto_judge

## Core Implementation

The core processing logic is implemented separately and integrated through the MCP interface. This separation ensures:

- Clean public API
- Protected proprietary algorithms
- Modular architecture
- Easy integration

## Usage

The server starts automatically when configured in Cursor's MCP settings. See the main README.md for configuration instructions.

## Tool Interfaces

Each tool has a defined input schema and output format. See the individual tool documentation in the parent docs/ folder for detailed specifications.
