# 🤝 Agent Interface Contracts

## Agent Contract Schema

```typescript
interface AgentContract {
  metadata: {
    name: string
    version: string
    lastUpdated: string
    model: string
  }
  inputs: {
    required: InputSpec[]
    optional: InputSpec[]
    dependencies: AgentName[]
  }
  outputs: {
    deliverables: Deliverable[]
    format: OutputFormat
    dependencies: string[]
    constraints: Constraint[]
  }
  handoffs: {
    to: AgentName[]
    format: HandoffFormat
    validation: ValidationRule[]
    timing: 'sequential' | 'parallel' | 'conditional'
  }
  triggers: Trigger[]
  sla: {
    responseTime: string
    quality: QualityMetric[]
  }
}

interface InputSpec {
  name: string
  type: 'architecture' | 'design' | 'test-plan' | 'infrastructure' | 'requirements'
  format: 'ADR' | 'wireframe' | 'user-story' | 'config' | 'markdown'
  source: AgentName
  validation: ValidationRule[]
}

interface Deliverable {
  name: string
  type: OutputType
  format: OutputFormat
  consumers: AgentName[]
  updateFrequency: 'on-demand' | 'milestone' | 'continuous'
}

interface HandoffFormat {
  structure: 'summary-details' | 'checklist' | 'matrix' | 'narrative'
  sections: string[]
  validationCriteria: string[]
}
```

## Contract Definitions by Agent

### 🏗️ Architecture Agent (arq)

```typescript
const arquiContract: AgentContract = {
  metadata: {
    name: "arq",
    version: "2.0.0",
    lastUpdated: "2025-08-20",
    model: "sonnet"
  },
  inputs: {
    required: [
      { name: "codebase", type: "architecture", format: "markdown", source: "filesystem" },
      { name: "requirements", type: "requirements", format: "user-story", source: "stakeholder" }
    ],
    optional: [
      { name: "existing-adrs", type: "architecture", format: "ADR", source: "documentation" }
    ],
    dependencies: []
  },
  outputs: {
    deliverables: [
      { 
        name: "Architecture Decision Records", 
        type: "ADR",
        format: "structured-markdown",
        consumers: ["front", "qa", "devops"],
        updateFrequency: "milestone"
      },
      {
        name: "System Diagrams",
        type: "diagram",
        format: "mermaid",
        consumers: ["front", "devops", "validator"],
        updateFrequency: "on-demand"
      },
      {
        name: "Technical Constraints",
        type: "constraints",
        format: "checklist",
        consumers: ["front", "qa", "devops"],
        updateFrequency: "milestone"
      }
    ],
    constraints: [
      "Performance budgets defined",
      "Security requirements specified",
      "Scalability considerations documented"
    ]
  },
  handoffs: {
    to: ["front", "qa", "devops"],
    format: {
      structure: "summary-details",
      sections: ["Executive Summary", "Technical Constraints", "Implementation Roadmap"],
      validationCriteria: ["All major decisions documented", "Risks identified and mitigated"]
    },
    timing: "sequential"
  },
  triggers: [
    "New feature requirements",
    "Technology stack changes", 
    "Performance issues",
    "Security vulnerabilities"
  ]
}
```

### 🎨 Frontend Agent (front)

```typescript
const frontContract: AgentContract = {
  metadata: {
    name: "front",
    version: "2.0.0", 
    lastUpdated: "2025-08-20",
    model: "sonnet"
  },
  inputs: {
    required: [
      { name: "technical-constraints", type: "architecture", format: "ADR", source: "arq" },
      { name: "ui-components", type: "design", format: "markdown", source: "filesystem" }
    ],
    optional: [
      { name: "user-feedback", type: "requirements", format: "user-story", source: "stakeholder" }
    ],
    dependencies: ["arq"]
  },
  outputs: {
    deliverables: [
      {
        name: "UI/UX Wireframes",
        type: "wireframe", 
        format: "textual-description",
        consumers: ["qa", "devops"],
        updateFrequency: "milestone"
      },
      {
        name: "Design System Tokens",
        type: "design-tokens",
        format: "structured-data",
        consumers: ["qa", "validator"],
        updateFrequency: "continuous"
      },
      {
        name: "Accessibility Guidelines",
        type: "a11y-spec",
        format: "checklist",
        consumers: ["qa", "validator"],
        updateFrequency: "milestone"
      }
    ],
    constraints: [
      "Mobile-first approach",
      "WCAG 2.1 AA compliance",
      "Performance budget respected"
    ]
  },
  handoffs: {
    to: ["qa", "validator"],
    format: {
      structure: "checklist",
      sections: ["UI Patterns", "Interaction Flows", "Accessibility Criteria"],
      validationCriteria: ["All screens wireframed", "Design system consistent"]
    },
    timing: "parallel"
  },
  triggers: [
    "Architecture decisions affecting UI",
    "New user interface requirements",
    "Accessibility issues reported",
    "Performance constraints updated"
  ]
}
```

### 🧪 QA Agent (qa)

```typescript
const qaContract: AgentContract = {
  metadata: {
    name: "qa",
    version: "2.0.0",
    lastUpdated: "2025-08-20", 
    model: "sonnet"
  },
  inputs: {
    required: [
      { name: "architecture-decisions", type: "architecture", format: "ADR", source: "arq" },
      { name: "ui-specifications", type: "design", format: "wireframe", source: "front" }
    ],
    optional: [
      { name: "existing-tests", type: "test-plan", format: "markdown", source: "filesystem" }
    ],
    dependencies: ["arq", "front"]
  },
  outputs: {
    deliverables: [
      {
        name: "Test Strategy Matrix",
        type: "test-plan",
        format: "matrix",
        consumers: ["devops", "validator"],
        updateFrequency: "milestone"
      },
      {
        name: "Acceptance Criteria",
        type: "acceptance-criteria", 
        format: "given-when-then",
        consumers: ["validator", "devops"],
        updateFrequency: "continuous"
      },
      {
        name: "Quality Gates Definition",
        type: "quality-gates",
        format: "checklist", 
        consumers: ["devops", "coord"],
        updateFrequency: "milestone"
      }
    ],
    constraints: [
      "Test pyramid strategy respected",
      "Risk-based testing approach",
      "Automation-first mindset"
    ]
  },
  handoffs: {
    to: ["devops", "validator"],
    format: {
      structure: "matrix",
      sections: ["Test Coverage", "Quality Metrics", "Gate Criteria"],
      validationCriteria: ["Critical paths covered", "Non-functional requirements tested"]
    },
    timing: "parallel"
  },
  triggers: [
    "New features for testing",
    "Architecture changes affecting testability", 
    "UI changes requiring test updates",
    "Quality issues in production"
  ]
}
```

## Handoff Templates

### 🔄 arq → front Handoff
```markdown
## Architecture → Frontend Handoff

### Technical Constraints Summary
- **Performance Budget**: [specific metrics]
- **Browser Support**: [versions and features]
- **Accessibility Requirements**: [WCAG level and specific needs]
- **Security Constraints**: [CSP, authentication requirements]

### Implementation Guidelines
- **Preferred Patterns**: [architectural patterns to follow]
- **Technology Restrictions**: [what to avoid and why]
- **Integration Points**: [APIs, external services]

### Validation Checklist
- [ ] UI patterns respect performance constraints
- [ ] Design system aligns with technical architecture
- [ ] Accessibility requirements technically feasible
- [ ] Security guidelines implementable in UI
```

### 🔄 front → qa Handoff
```markdown
## Frontend → QA Handoff

### UI Specifications Summary
- **Critical User Journeys**: [main flows to test]
- **Accessibility Features**: [specific a11y implementations]
- **Responsive Breakpoints**: [testing requirements per device]
- **Interactive Elements**: [states and behaviors to validate]

### Testing Requirements
- **Visual Testing**: [screenshots, visual regression]
- **Interaction Testing**: [user flows, form validation]
- **Performance Testing**: [load times, Core Web Vitals]

### Validation Checklist
- [ ] All wireframes have corresponding test cases
- [ ] Accessibility criteria testable
- [ ] Responsive design testable across devices
- [ ] User interactions properly validated
```

### 🔄 qa → devops Handoff
```markdown
## QA → DevOps Handoff

### Test Strategy Summary
- **Automation Level**: [unit/integration/e2e distribution]
- **Quality Gates**: [criteria for deployment]
- **Test Environments**: [requirements for each environment]
- **Performance Baselines**: [acceptable thresholds]

### CI/CD Integration
- **Test Execution**: [when and how tests run]
- **Quality Reports**: [format and distribution]
- **Failure Handling**: [rollback criteria]

### Validation Checklist
- [ ] All quality gates automatable
- [ ] Test results reportable in CI/CD
- [ ] Performance thresholds monitorable
- [ ] Rollback criteria clearly defined
```

## Contract Validation Rules

### ✅ Validation Framework
```typescript
interface ValidationRule {
  type: 'format' | 'content' | 'dependency' | 'timing'
  criteria: string
  severity: 'blocker' | 'critical' | 'minor'
  validator: AgentName
}

const validationRules: ValidationRule[] = [
  {
    type: 'dependency',
    criteria: 'arq outputs must be available before front execution',
    severity: 'blocker',
    validator: 'validator'
  },
  {
    type: 'content', 
    criteria: 'ADRs must include consequences and risks sections',
    severity: 'critical',
    validator: 'validator'
  },
  {
    type: 'format',
    criteria: 'All deliverables must follow structured markdown format',
    severity: 'minor',
    validator: 'coord'
  }
]
```

This contract system ensures:
- **Clear dependencies** between agents
- **Standardized handoff** formats
- **Validation criteria** for each output
- **Timing coordination** for optimal workflow
- **Quality gates** at each interface point
