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

### 📋 Product Owner Agent (product)

```typescript
const productContract: AgentContract = {
  metadata: {
    name: "product",
    version: "1.0.0",
    lastUpdated: "2025-08-22",
    model: "sonnet"
  },
  inputs: {
    required: [
      { name: "business-requirements", type: "requirements", format: "markdown", source: "stakeholder" },
      { name: "user-research", type: "requirements", format: "user-story", source: "stakeholder" }
    ],
    optional: [
      { name: "market-analysis", type: "requirements", format: "markdown", source: "external" },
      { name: "competitive-analysis", type: "requirements", format: "markdown", source: "external" },
      { name: "existing-backlog", type: "requirements", format: "user-story", source: "documentation" }
    ],
    dependencies: []
  },
  outputs: {
    deliverables: [
      { 
        name: "User Stories", 
        type: "user-story",
        format: "structured-markdown",
        consumers: ["arq", "front", "qa", "backend"],
        updateFrequency: "on-demand"
      },
      {
        name: "Acceptance Criteria",
        type: "test-plan",
        format: "given-when-then",
        consumers: ["qa", "front", "backend"],
        updateFrequency: "on-demand"
      },
      {
        name: "Priority Framework",
        type: "requirements",
        format: "scored-list",
        consumers: ["coord", "arq"],
        updateFrequency: "milestone"
      },
      {
        name: "Epic Definitions",
        type: "requirements",
        format: "structured-markdown",
        consumers: ["coord", "arq", "backend"],
        updateFrequency: "milestone"
      }
    ],
    constraints: [
      "All user stories follow As/I want/So that format",
      "Acceptance criteria are testable and specific",
      "Priority scores have clear business justification",
      "Success metrics are defined and measurable"
    ]
  },
  handoffs: {
    to: ["arq", "coord"],
    format: {
      structure: "business-context-stories-criteria",
      sections: ["Business Context", "User Stories", "Acceptance Criteria", "Priority Assessment"],
      validationCriteria: ["All stories have clear business value", "Acceptance criteria are testable"]
    },
    timing: "sequential"
  },
  triggers: [
    "New feature requests from stakeholders",
    "Requirements clarification needed",
    "Backlog prioritization required",
    "Product discovery sessions"
  ],
  sla: {
    responseTime: "4 hours for user stories, 1 day for epics",
    quality: [
      { metric: "Story completeness", target: "100% of INVEST criteria met" },
      { metric: "Acceptance criteria clarity", target: "100% testable criteria" },
      { metric: "Business value alignment", target: "All stories have clear ROI" }
    ]
  }
}
```

### 🏗️ Architecture Agent (arq)

```typescript
const arquiContract: AgentContract = {
  metadata: {
    name: "arq",
    version: "2.0.0",
    lastUpdated: "2025-08-21",
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
        consumers: ["front", "backend", "qa", "devops"],
        updateFrequency: "milestone"
      },
      {
        name: "System Diagrams",
        type: "diagram",
        format: "mermaid",
        consumers: ["front", "backend", "devops", "validator"],
        updateFrequency: "on-demand"
      },
      {
        name: "Technical Constraints",
        type: "constraints",
        format: "checklist",
        consumers: ["front", "backend", "qa", "devops"],
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
    to: ["front", "backend", "qa", "devops"],
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

### 🛠️ Backend Agent (backend)

```typescript
const backendContract: AgentContract = {
  metadata: {
    name: "backend",
    version: "1.0.0",
    lastUpdated: "2025-08-21",
    model: "sonnet"
  },
  inputs: {
    required: [
      { name: "technical-constraints", type: "architecture", format: "ADR", source: "arq" },
      { name: "api-requirements", type: "requirements", format: "user-story", source: "stakeholder" }
    ],
    optional: [
      { name: "existing-apis", type: "api-spec", format: "openapi", source: "filesystem" },
      { name: "database-schema", type: "data-model", format: "sql", source: "filesystem" }
    ],
    dependencies: ["arq"]
  },
  outputs: {
    deliverables: [
      {
        name: "API Specifications",
        type: "api-design",
        format: "openapi-spec",
        consumers: ["front", "qa", "devops"],
        updateFrequency: "continuous"
      },
      {
        name: "Data Model Design",
        type: "database-schema",
        format: "entity-diagram",
        consumers: ["devops", "qa", "validator"],
        updateFrequency: "milestone"
      },
      {
        name: "Service Architecture",
        type: "service-design",
        format: "architecture-diagram",
        consumers: ["arq", "devops", "validator"],
        updateFrequency: "milestone"
      },
      {
        name: "Authentication Strategy",
        type: "auth-design",
        format: "security-spec",
        consumers: ["front", "qa", "devops"],
        updateFrequency: "milestone"
      }
    ],
    constraints: [
      "API versioning strategy defined",
      "Security requirements implemented",
      "Performance benchmarks established"
    ]
  },
  handoffs: {
    to: ["front", "qa", "devops"],
    format: {
      structure: "api-first",
      sections: ["API Contracts", "Data Models", "Security Specifications", "Performance Requirements"],
      validationCriteria: ["API contracts testable", "Data integrity ensured", "Security validated"]
    },
    timing: "sequential"
  },
  triggers: [
    "API design requirements",
    "Database modeling needs",
    "Authentication implementation",
    "Performance optimization",
    "Integration with external services"
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

### 🔄 product → arq Handoff
```markdown
## Product → Architecture Handoff

### Business Context Summary
- **Epic Overview**: [high-level business goal and user value]
- **Success Metrics**: [KPIs, conversion rates, user satisfaction targets]
- **Business Constraints**: [timeline, budget, compliance requirements]
- **User Personas**: [primary and secondary user types affected]

### Functional Requirements
- **User Stories**: [complete set of user stories with business justification]
- **Acceptance Criteria**: [testable criteria in Given/When/Then format]
- **User Flows**: [critical paths users will take through the system]
- **Data Requirements**: [what data needs to be stored/processed/displayed]

### Non-Functional Requirements
- **Performance Expectations**: [user experience requirements, load expectations]
- **Security Requirements**: [data protection, privacy, compliance needs]
- **Scalability Needs**: [growth projections, concurrent users]
- **Integration Requirements**: [external systems, third-party APIs]

### Validation Checklist
- [ ] All user stories have clear business value
- [ ] Acceptance criteria are testable and specific
- [ ] Non-functional requirements defined with measurable targets
- [ ] User flows cover all major scenarios
- [ ] Success metrics are trackable and achievable
```

### 🔄 product → coord Handoff
```markdown
## Product → Coordinator Handoff

### Prioritization Summary
- **Epic Priority Score**: [MoSCoW classification with RICE scores]
- **Business Justification**: [ROI analysis, strategic alignment]
- **Timeline Constraints**: [hard deadlines, market windows]
- **Resource Implications**: [estimated effort, team allocation needs]

### Stakeholder Context
- **Key Stakeholders**: [decision makers, approvers, impacted teams]
- **Dependencies**: [external dependencies, prerequisite features]
- **Risk Assessment**: [business risks, technical risks, mitigation strategies]
- **Change Management**: [user training needs, rollout strategy]

### Implementation Strategy
- **Phasing Recommendations**: [MVP vs full feature, incremental delivery]
- **Feature Flags**: [gradual rollout strategy, A/B testing opportunities]
- **Rollback Plan**: [what to do if feature doesn't meet success criteria]

### Validation Checklist
- [ ] Priority scores justified with business impact
- [ ] All stakeholders identified and aligned
- [ ] Dependencies mapped and addressed
- [ ] Risk mitigation strategies defined
```

### 🔄 arq → backend Handoff
```markdown
## Architecture → Backend Handoff

### System Architecture Summary
- **Service Architecture**: [monolith/microservices/serverless approach]
- **Data Architecture**: [database strategy, data flow patterns]
- **Integration Patterns**: [API patterns, event-driven, messaging]
- **Security Architecture**: [authentication strategy, authorization patterns]

### Technical Constraints
- **Performance Requirements**: [response times, throughput, scalability needs]
- **Security Requirements**: [encryption, compliance, audit requirements]
- **Integration Constraints**: [external APIs, legacy systems, protocols]
- **Technology Constraints**: [approved technologies, frameworks, databases]

### Implementation Guidelines
- **API Design Standards**: [REST principles, naming conventions, error handling]
- **Data Management**: [consistency requirements, transaction patterns]
- **Service Communication**: [synchronous vs asynchronous patterns]

### Validation Checklist
- [ ] Service architecture aligns with system constraints
- [ ] API design follows architectural patterns
- [ ] Security requirements technically feasible
- [ ] Performance requirements achievable with proposed design
```

### 🔄 backend → front Handoff
```markdown
## Backend → Frontend Handoff

### API Contracts Summary
- **Endpoint Specifications**: [REST/GraphQL endpoints with request/response schemas]
- **Authentication Flow**: [login/logout, token refresh, session management]
- **Error Handling**: [error codes, error messages, retry strategies]
- **Data Formats**: [JSON schemas, date formats, validation rules]

### Integration Requirements
- **API Base URLs**: [development, staging, production endpoints]
- **Authentication Methods**: [JWT, OAuth, API keys, session cookies]
- **Request Headers**: [required headers, content-type, authorization]
- **Response Structures**: [success/error patterns, pagination, filtering]

### Frontend Implications
- **State Management**: [data fetching patterns, cache strategies]
- **Error Handling**: [user-friendly error messages, retry mechanisms]
- **Loading States**: [progress indicators, skeleton screens]

### Validation Checklist
- [ ] All frontend data needs covered by APIs
- [ ] Authentication flow implementable in React
- [ ] Error handling patterns user-friendly
- [ ] API responses optimized for frontend consumption
```

### 🔄 backend → qa Handoff
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
