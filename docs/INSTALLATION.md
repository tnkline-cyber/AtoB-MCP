# Installation Guide

## Prerequisites

### Required

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)
- **Cursor IDE**: Latest version

### Optional

- **Git**: For version control
- **yarn**: Alternative package manager

---

## Step-by-Step Installation

### 1. Clone the Repository

```bash
git clone https://github.com/[username]/AtoB-MCP.git
cd AtoB-MCP
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### 3. Verify Installation

Check that the server file exists:
```bash
ls -la mcp-server/server.js
```

---

## Cursor Configuration

### 1. Locate MCP Configuration File

The MCP configuration file is located at:
```
~/.cursor/mcp.json
```

If the file does not exist, create it:
```bash
touch ~/.cursor/mcp.json
```

### 2. Add AtoB-MCP Configuration

Open `~/.cursor/mcp.json` and add the following configuration:

```json
{
  "mcpServers": {
    "atob-system": {
      "command": "node",
      "args": [
        "/absolute/path/to/AtoB-MCP/mcp-server/server.js"
      ],
      "disabled": false
    }
  }
}
```

**Important**: Replace `/absolute/path/to/AtoB-MCP` with the actual absolute path to your installation.

### Example

If you cloned to `/Users/username/projects/AtoB-MCP`, your configuration should be:

```json
{
  "mcpServers": {
    "atob-system": {
      "command": "node",
      "args": [
        "/Users/username/projects/AtoB-MCP/mcp-server/server.js"
      ],
      "disabled": false
    }
  }
}
```

### 3. Restart Cursor

Completely quit and restart Cursor IDE to load the new MCP server.

---

## Verification

### 1. Check MCP Server Status

In Cursor, the MCP server should automatically start when you open a project.

### 2. Test Basic Functionality

Try using one of the MCP tools through Cursor's interface.

Example test with `auto_judge`:
```javascript
{
  "task": "Create a simple React component",
  "context": {}
}
```

If the tool responds with judgment results, the installation is successful.

---

## Integration with Other MCPs

AtoB-MCP works best when integrated with:

### Memory MCP (Recommended)

```json
{
  "mcpServers": {
    "atob-system": {
      "command": "node",
      "args": ["/path/to/AtoB-MCP/mcp-server/server.js"]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

### Sequential Thinking MCP (Recommended)

```json
{
  "mcpServers": {
    "atob-system": {
      "command": "node",
      "args": ["/path/to/AtoB-MCP/mcp-server/server.js"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

### Complete Configuration Example

```json
{
  "mcpServers": {
    "atob-system": {
      "command": "node",
      "args": ["/path/to/AtoB-MCP/mcp-server/server.js"]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/workspace"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}
```

---

## Troubleshooting

### MCP Server Not Starting

1. Check Node.js version:
   ```bash
   node --version
   ```
   Should be 18.x or higher.

2. Verify file path in `mcp.json` is correct and absolute.

3. Check file permissions:
   ```bash
   chmod +x mcp-server/server.js
   ```

4. Check Cursor logs for error messages.

### Dependencies Not Installing

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. Try using yarn instead:
   ```bash
   yarn install
   ```

### MCP Tools Not Responding

1. Restart Cursor completely (quit and reopen).

2. Check that the MCP server is not disabled in `mcp.json`:
   ```json
   "disabled": false
   ```

3. Verify the server is running by checking Cursor's MCP status.

---

## Updating

To update to the latest version:

```bash
cd AtoB-MCP
git pull origin main
npm install
```

Then restart Cursor.

---

## Uninstallation

1. Remove the configuration from `~/.cursor/mcp.json`.

2. Delete the installation directory:
   ```bash
   rm -rf /path/to/AtoB-MCP
   ```

3. Restart Cursor.

---

For usage examples, see USAGE.md
For feature details, see FEATURES.md
