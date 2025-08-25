# 🤖 Claude Agents - Execution Layer

## Quick Reference

| Agent | Purpose | Usage |
|-------|---------|-------|
| **product** | Product Owner/Requirements | `@product: define user stories for [feature]` |
| **arq** | Architecture/Technical Design | `@arq: analyze architecture for [system]` |
| **backend** | API/Service Design | `@backend: design API for [functionality]` |
| **front** | UI/UX/Frontend | `@front: design UI for [interface]` |
| **qa** | Testing/Quality Assurance | `@qa: create test strategy for [feature]` |
| **devops** | Infrastructure/Deployment | `@devops: setup CI/CD for [project]` |
| **coord** | Workflow Coordination | `@coord: orchestrate workflow for [initiative]` |
| **validator** | Cross-Agent Validation | `@validator: validate consistency between outputs` |
| **workflow** | Workflow Intelligence | `@workflow: optimize execution sequence for [changes]` |
| **ai-resolver** | AI Conflict Resolution | `@ai-resolver: resolve conflicts between [agents]` |

## Usage Pattern

```bash
# 1. Strategic Planning
@coord: plan implementation of [feature/system]

# 2. Execute Plan (follow coordinator roadmap)
@arq: [specific architecture task]
@front: [specific UI task based on arq]
@qa: [specific testing task]
@devops: [specific infrastructure task]

# 3. Validation & Integration
@validator: validate consistency across all outputs
@coord: consolidate final implementation roadmap
```

## 📚 Full Documentation

For complete documentation, workflows, contracts, and implementation guides:
→ **[../Documentacion Agentes/README.md](../Documentacion%20Agentes/README.md)**

## 🚀 Quick Start

1. Start with: `@coord: plan [your initiative]`
2. Follow the generated roadmap
3. Use `@validator` at checkpoints
4. Use `@ai-resolver` if conflicts arise

---
**Version**: 2.1.0 | **Last Updated**: 2025-08-25
