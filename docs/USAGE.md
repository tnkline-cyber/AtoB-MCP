# Usage Guide

## Basic Workflow

AtoB-MCP provides intelligent AI processing through eight integrated tools. The system automatically determines the optimal processing strategy for each task.

---

## Quick Start

### 1. Automatic Mode (Recommended)

Let the system automatically determine the best approach:

```javascript
// Use auto_judge to analyze and route your task
auto_judge({
  "task": "Design a scalable authentication system for microservices",
  "context": {
    "production": true,
    "users": 50000
  }
})
```

The system will:
- Assess task complexity
- Determine business impact
- Select optimal persona
- Activate Golden Ticket if needed
- Activate Deep Thinking if needed

### 2. Direct Tool Usage

For specific needs, call tools directly:

```javascript
analyze_task({
  "task_description": "Optimize database queries",
  "context": {
    "database": "PostgreSQL",
    "current_performance": "slow"
  }
})
```

---

## Tool Usage Examples

### analyze_task

**When to use**: Need detailed analysis before starting work

```javascript
analyze_task({
  "task_description": "Refactor legacy payment processing system",
  "context": {
    "tech_stack": ["Node.js", "Express", "MongoDB"],
    "constraints": {
      "zero_downtime": true,
      "backward_compatible": true
    }
  }
})
```

**Response includes**:
- Complexity assessment
- Risk analysis
- Optimal approach steps
- Time estimation
- Confidence score

---

### generate_persona

**When to use**: Need specialized expertise for a task

```javascript
generate_persona({
  "task_description": "Create AI prompt optimization strategy",
  "genre": "prompt-engineering"
})
```

**Available genres**:
- `engineering` - Software development
- `prompt-engineering` - AI and prompt optimization
- `marketing` - Marketing and business strategy
- Auto-detected if not specified

---

### evaluate_quality

**When to use**: Verify output quality before delivery

```javascript
evaluate_quality({
  "content": "Your code or content to evaluate"
})
```

**Returns**:
- Overall score (0-100)
- Per-criterion scores (10 criteria)
- Pass/fail status (95+ = pass)
- Strengths and weaknesses
- Improvement recommendations

---

### store_learning

**When to use**: Record insights for future reference

```javascript
store_learning({
  "task": "Database migration from MySQL to PostgreSQL",
  "outcome": "success",
  "insights": [
    "Schema conversion required careful type mapping",
    "Incremental migration reduced downtime",
    "Comprehensive testing caught edge cases early"
  ]
})
```

**Categories**:
- Success patterns
- Failure cases
- Best practices
- Environment-specific solutions

---

### search_knowledge

**When to use**: Find relevant past solutions and patterns

```javascript
search_knowledge({
  "query": "authentication error handling patterns"
})
```

**Search targets**:
- Past solutions
- Error patterns
- Best practices
- Similar cases

---

### trigger_golden_ticket

**When to use**: Require guaranteed 95%+ quality

```javascript
trigger_golden_ticket({
  "task": "Design production-ready API with security",
  "context": {
    "critical": true,
    "performance": true,
    "security": true
  }
})
```

**Four-phase process**:
1. Deep Understanding
2. Comprehensive Planning
3. Excellent Implementation
4. Strict Validation

**Automatic activation for**:
- High complexity tasks
- High business impact
- Critical production systems
- Explicit quality requirements

---

### trigger_deep_thinking

**When to use**: Complex problems requiring step-by-step reasoning

```javascript
trigger_deep_thinking({
  "problem": "Choose between microservices and monolith architecture",
  "context": {
    "team_size": 5,
    "timeline": "6 months",
    "scalability_needs": "high",
    "complexity_tolerance": "medium"
  }
})
```

**Best for**:
- Architectural decisions
- Trade-off analysis
- Debugging complex issues
- Design reviews
- A/B comparisons

---

### auto_judge

**When to use**: Unsure which approach to take

```javascript
auto_judge({
  "task": "Implement real-time chat feature",
  "context": {
    "users": 10000,
    "production": true
  }
})
```

**Determines**:
- Complexity level
- Priority
- Optimal persona
- Golden Ticket need
- Deep Thinking need
- Processing strategy

---

## Common Workflows

### Workflow 1: New Feature Development

```javascript
// Step 1: Auto-judge the task
auto_judge({
  "task": "Add payment processing to e-commerce platform",
  "context": { "production": true }
})

// System automatically:
// - Selects engineering persona
// - Activates Golden Ticket (high impact)
// - Analyzes requirements

// Step 2: Store learnings after completion
store_learning({
  "task": "Payment processing implementation",
  "outcome": "success",
  "insights": ["Stripe integration straightforward", "PCI compliance required careful review"]
})
```

### Workflow 2: Bug Investigation

```javascript
// Step 1: Search for similar issues
search_knowledge({
  "query": "memory leak in Node.js application"
})

// Step 2: Deep analysis
trigger_deep_thinking({
  "problem": "Investigate memory leak in production",
  "context": {
    "symptoms": "gradual memory increase",
    "environment": "Node.js 18, Docker"
  }
})

// Step 3: Store solution
store_learning({
  "task": "Memory leak investigation",
  "outcome": "success",
  "insights": ["Event listener cleanup missing", "Use weak references for caches"]
})
```

### Workflow 3: Architecture Decision

```javascript
// Step 1: Deep thinking for analysis
trigger_deep_thinking({
  "problem": "Choose database for new service",
  "context": {
    "data_type": "time-series metrics",
    "scale": "millions of events per day",
    "query_patterns": "recent data, aggregations"
  }
})

// Step 2: Quality check the decision
evaluate_quality({
  "content": "Selected TimescaleDB based on time-series optimization and PostgreSQL compatibility"
})

// Step 3: Record decision
store_learning({
  "task": "Database selection for metrics service",
  "outcome": "success",
  "insights": ["TimescaleDB ideal for time-series", "PostgreSQL compatibility reduces learning curve"]
})
```

---

## Best Practices

### 1. Let Auto-Judge Lead

Start with `auto_judge` for most tasks. It automatically selects the optimal processing strategy.

### 2. Provide Context

More context = better results. Include:
- Technical constraints
- Business requirements
- Performance needs
- Security considerations
- Timeline constraints

### 3. Store Learnings

Always use `store_learning` after completing tasks. This builds the knowledge base for future work.

### 4. Search Before Starting

Use `search_knowledge` to find relevant past solutions before starting new work.

### 5. Use Golden Ticket for Critical Tasks

For production-critical or high-stakes tasks, explicitly trigger Golden Ticket for guaranteed quality.

---

## Integration Tips

### With Memory MCP

AtoB-MCP automatically integrates with Memory MCP when available, enhancing:
- Knowledge retention
- Context persistence
- Learning accumulation

### With Sequential Thinking MCP

Deep Thinking mode leverages Sequential Thinking MCP for:
- Transparent reasoning
- Step-by-step analysis
- Decision rationale

### With Standard MCPs

Works seamlessly with:
- Filesystem MCP (code operations)
- GitHub MCP (repository operations)
- Other standard MCP tools

---

## Performance Tips

### Optimize Tool Selection

- Simple tasks: `analyze_task` only
- Complex tasks: `auto_judge` (activates needed tools)
- Quality-critical: `trigger_golden_ticket`
- Reasoning-heavy: `trigger_deep_thinking`

### Context Management

Provide relevant context but avoid excessive detail. Focus on:
- Technical requirements
- Constraints
- Success criteria

### Knowledge Utilization

Regularly use `search_knowledge` to leverage accumulated learning.

---

For feature details, see FEATURES.md
For installation instructions, see INSTALLATION.md
