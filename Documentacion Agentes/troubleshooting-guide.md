# 🚨 Guía de Troubleshooting: Sistema Multi-Agente

## 📋 **Quick Reference - Problemas Comunes**

### **🔥 Emergencias (Resolución Inmediata)**

#### **Agent No Responde (Timeout)**
```bash
# Síntoma: >5 minutos sin respuesta
# Causa: Agent overload o system issue

# ⚡ Solución Inmediata:
1. STOP current request
2. Switch a agente alternativo:
   @coord: en [agent type] consultant mode, [simplified request]

# ⚡ Prevención:
- Check agent status antes de complex requests
- Use progressive complexity (simple → complex)
```

#### **Context Corruption Crítica**
```bash
# Síntoma: Agent menciona wrong technology stack
# Ejemplo: @front menciona Node.js en proyecto React

# ⚡ Solución Inmediata:
@front: RESET - starting fresh, evalúa únicamente UI components del proyecto React actual

# ⚡ Prevención:
- Explicit project context en cada request
- Self-contained requests con all necessary info
```

#### **Output Completamente Incoherente**
```bash
# Síntoma: Response no relacionado con request
# Ejemplo: Pregunta sobre React, respuesta sobre Python

# ⚡ Solución Inmediata:
1. Document the failure
2. Switch a fallback agent inmediatamente
3. Report pattern si es recurrente

# ⚡ Circuit Breaker Mental:
- 3 incoherent responses = Agent degraded
- Use fallbacks por 10+ minutes
```

---

## 🔧 **Diagnostic Workflows**

### **Workflow 1: Agent Health Check**

**Daily Routine (2 minutes):**
```bash
# Quick health verification
@arq: confirm access a React architecture knowledge
@front: confirm access a PrimeReact component knowledge  
@qa: confirm access a testing best practices
@coord: confirm workflow coordination capabilities

# Expected responses:
✅ "Yes, I have access to [domain] knowledge..."
❌ Vague "I understand" o generic responses
```

**Weekly Deep Check (10 minutes):**
```bash
# Complex task test para cada agent
@arq: analyze this simple React component structure: [paste basic component]
@front: suggest UI improvement para basic form with validation
@qa: outline test strategy para login functionality
@coord: plan simple feature implementation: user profile page

# Quality assessment:
✅ Specific, actionable responses with concrete recommendations
❌ Generic advice, uncertainty phrases, missing details
```

### **Workflow 2: Context Transfer Validation**

**Before Multi-Agent Workflow:**
```bash
# 1. Context baseline establishment
@arq: define architecture constraints para [feature]

# 2. Context transfer test  
@front: based on architecture constraints from @arq, [simple UI task]

# 3. Validation check
@validator: verify consistency between @arq architecture y @front UI approach

# Red flags:
❌ @front ignores architecture constraints
❌ @validator finds contradictions
❌ Information loss between handoffs
```

### **Workflow 3: Error Pattern Detection**

**Pattern Recognition (Weekly Review):**
```bash
# Agent performance tracking
Agent Performance This Week:
@arq: 8/10 requests successful, 2 generic responses
@front: 9/10 successful, 1 context confusion  
@qa: 7/10 successful, 3 incomplete outputs
@coord: 6/10 successful, 4 overload issues

# Pattern identification:
- @qa showing quality decline → Needs simpler requests
- @coord frequent overload → Decompose complex workflows
- @arq mostly stable → Continue normal usage
```

---

## 🛡️ **Fallback Decision Trees**

### **Primary Agent Failure - Decision Matrix**

| Agent Failed | Fallback Level 1 | Fallback Level 2 | Manual Escalation |
|--------------|------------------|-------------------|------------------|
| **@arq** | @coord (architect mode) | @validator (technical validation) | Architecture docs review |
| **@front** | @coord (UI consultant mode) | @arq (frontend constraints) | PrimeReact docs + examples |
| **@qa** | @coord (quality planner) | @validator (quality validation) | Testing framework docs |
| **@devops** | @coord (infrastructure mode) | @arq (deployment architecture) | Deployment guide manual |
| **@coord** | @workflow (workflow mode) | Manual orchestration | Break down into simple steps |

### **Request Simplification Ladder**

**Example: Architecture Analysis**
```bash
# Level 0: Original complex request
@arq: evaluate entire React architecture + identify tech debt + recommend migrations + optimize performance

# Level 1: Reduce scope
@arq: evaluate únicamente React architecture structure usando FSD principles

# Level 2: Focus specific area  
@arq: analyze únicamente src/ folder structure y identify FSD violations

# Level 3: Minimal viable request
@arq: confirm que proyecto structure follows basic React patterns

# Level 4: Binary validation
@arq: yes/no - ¿proyecto uses Feature-Sliced Design?
```

### **Context Reduction Strategy**

**Progressive Context Removal:**
```bash
# Full context (often causes overload)
@front: [50 lines of architecture decisions] + [20 previous UI decisions] + [10 technical constraints] + design new login page

# Reduced context - Core only
@front: using PrimeReact + FSD architecture, design login page

# Minimal context - Essential only  
@front: design login form using PrimeReact components

# No context - Fresh start
@front: design basic login form for React application
```

---

## 📊 **Error Monitoring Dashboard**

### **Daily Health Metrics**

**Manual Tracking (Simple Spreadsheet):**
```yaml
date: 2025-08-26
agents_used:
  arq: 
    requests: 5
    success_rate: 80%
    avg_quality: 8/10
    issues: ["1 generic response"]
  
  front:
    requests: 3  
    success_rate: 100%
    avg_quality: 9/10
    issues: []
  
  coord:
    requests: 2
    success_rate: 50%
    avg_quality: 6/10
    issues: ["1 overload, complex request failed"]

daily_summary: "@coord showing overload, need to simplify requests"
```

### **Weekly Trend Analysis**

**Pattern Recognition:**
```bash
Week 1: @coord overload 3/7 days → Pattern detected
Week 2: Implemented request decomposition → @coord overload 1/7 days
Week 3: Continued simple requests → @coord stable performance
Week 4: Gradually increased complexity → Monitor for regression

Learning: @coord requires progressive complexity buildup
```

### **Alert Triggers**

**Manual Alert System:**
```yaml
red_alerts:
  - agent_success_rate < 50% for 2+ days
  - 3+ consecutive failures on same agent
  - quality_score < 5/10 average over day
  
yellow_alerts:
  - agent_success_rate < 70% for 1 day
  - 2 consecutive failures on same agent  
  - quality_score < 7/10 average over day

actions:
  red_alert: "Switch to fallbacks immediately, document issue"
  yellow_alert: "Monitor closely, prepare fallbacks"
```

---

## 🔄 **Recovery Procedures**

### **Standard Operating Procedures (SOPs)**

#### **SOP 1: Single Agent Failure Recovery**
```bash
# Step 1: Immediate Response (0-2 minutes)
1. Stop using failed agent immediately
2. Document failure: timestamp, request, response quality
3. Switch to predetermined fallback agent

# Step 2: Short-term Recovery (2-15 minutes)  
4. Test fallback agent with simple request
5. If successful, continue with simplified requests
6. If fallback also fails, escalate to manual procedure

# Step 3: Medium-term Recovery (15+ minutes)
7. After 10-15 minutes, test original agent with simple request
8. If successful, gradually increase complexity
9. If still failing, extend recovery time to 30+ minutes
```

#### **SOP 2: Context Transfer Failure Recovery**
```bash
# Step 1: Identify Transfer Point
1. Locate where context loss occurred
2. Identify specific information that was lost
3. Document gap for future prevention

# Step 2: Context Reconstruction
4. Explicitly provide missing context to receiving agent
5. Use direct quotes from previous agent outputs
6. Verify information transfer with validation agent

# Step 3: Prevention Update
7. Update request templates to include explicit context
8. Add context transfer checkpoints to workflows
9. Document lesson learned for team knowledge base
```

#### **SOP 3: Multi-Agent Workflow Failure Recovery**
```bash
# Step 1: Workflow Assessment (0-5 minutes)
1. Identify which agent(s) in workflow failed
2. Assess if failure is isolated or cascade effect
3. Document current workflow state

# Step 2: Decomposition Strategy (5-10 minutes)
4. Break complex workflow into smaller sequential steps
5. Start with simplest, most critical component
6. Use single-agent requests instead of coordination

# Step 3: Incremental Rebuild (10+ minutes)
7. Execute simplified workflow step by step
8. Validate each step before proceeding
9. Gradually reconnect workflow components as they stabilize
```

---

## 🎯 **Prevention Strategies**

### **Proactive Measures**

#### **Request Quality Assurance**
```bash
# Before sending any agent request, check:
✅ Is request specific and actionable?
✅ Is context necessary and sufficient (not excessive)?
✅ Is complexity appropriate for current agent performance?
✅ Do I have a fallback plan if this fails?
```

#### **Agent Load Balancing**
```bash
# Distribute requests across agents to prevent overload:
Morning: Use @arq for architecture reviews
Afternoon: Use @front for UI tasks  
Evening: Use @qa for testing reviews

# Avoid agent overuse patterns:
❌ 5+ complex requests to same agent in <1 hour
❌ Back-to-back coordinator orchestration requests
❌ Cascading failures due to agent fatigue
```

#### **Context Management Hygiene**
```bash
# Context best practices:
✅ Maximum 500 words of context per request
✅ Focus on immediately relevant information only
✅ Use bullet points for complex context
✅ Reference specific previous outputs when needed

# Context refresh triggers:
- Every 3rd sequential request to same agent
- After any context corruption incident  
- When switching between different project areas
```

---

## 📚 **Knowledge Base - Common Issues**

### **Issue Database**

#### **Issue #001: @coord Consistent Overload**
```yaml
symptoms: 
  - "Coordinator generates vague, incomplete plans"
  - "Plans don't include specific commands"
  - "Contradictory recommendations"

root_cause: "Request complexity exceeding coordinator processing capacity"

solutions:
  immediate: "Switch to single-agent requests for individual domains"
  short_term: "Decompose complex workflows into sequential simple workflows"  
  long_term: "Create coordinator request templates with complexity limits"

prevention: "Limit coordinator requests to 2-3 agents max, avoid >5 requirements"
```

#### **Issue #002: @front Context Confusion**
```yaml
symptoms:
  - "Mentions backend technologies in frontend requests"
  - "Suggests non-PrimeReact components"
  - "Ignores existing design system"

root_cause: "Context contamination from previous conversations"

solutions:
  immediate: "Use context reset: 'starting fresh, evaluate UI...'"
  short_term: "Explicitly mention PrimeReact + React context"
  long_term: "Create frontend request templates with tech stack clarification"

prevention: "Always include 'using PrimeReact components' in UI requests"
```

#### **Issue #003: @qa Incomplete Test Strategies**
```yaml
symptoms:
  - "Lists test types but not specific test cases"
  - "Generic testing advice without project context"
  - "Missing coverage for critical user flows"

root_cause: "Request lacks specific functionality details"

solutions:
  immediate: "Provide concrete user stories or acceptance criteria"
  short_term: "Ask for specific test cases, not just strategy"
  long_term: "Create QA request templates with user story examples"

prevention: "Include specific user flows and acceptance criteria in QA requests"
```

---

## 🚀 **Advanced Recovery Techniques**

### **Emergency Procedures**

#### **Complete Agent System Failure**
```bash
# All agents unresponsive or producing poor quality
# Probability: <1% but critical when occurs

# Emergency Protocol:
1. Document system state: timestamp, last successful requests
2. Switch to pure manual mode immediately
3. Consult project documentation directly
4. Use external resources (official docs, community guides)
5. Wait 30+ minutes before retesting any agents
6. Gradually reintroduce agents starting with simplest requests
```

#### **Critical Project Deadline with Agent Issues**
```bash
# When agent failures threaten project timeline

# Priority Protocol:
1. Identify minimum viable decisions needed
2. Use fastest reliable agents only (usually direct, not coordinator)
3. Accept lower quality outputs for non-critical decisions
4. Focus agent usage on highest-impact decisions only
5. Use manual research for everything else
6. Document all shortcuts taken for future cleanup
```

---

## 📈 **Continuous Improvement Process**

### **Monthly System Review**

**Performance Analysis:**
```bash
# Monthly Agent Report Card
Agent Performance Last 30 Days:

@arq: 
  - Requests: 45
  - Success Rate: 87%
  - Common Issues: Generic responses when overloaded
  - Trend: Improving with simpler requests

@front:
  - Requests: 30
  - Success Rate: 93%
  - Common Issues: Rare context confusion
  - Trend: Stable, high quality

@coord:
  - Requests: 20  
  - Success Rate: 65%
  - Common Issues: Overload with complex workflows
  - Trend: Improved with decomposition strategy

Recommendations:
- Continue simplified approach for @coord
- Monitor @arq for overload signs
- @front performing excellently, increase usage
```

### **System Evolution Strategy**

**Quarterly Updates:**
```bash
# Q1 Focus: Error Detection & Recovery
# Q2 Focus: Prevention & Optimization  
# Q3 Focus: Advanced Workflows & Integration
# Q4 Focus: Documentation & Knowledge Transfer

Current Quarter Goals:
- Reduce manual interventions by 50%
- Improve average agent success rate to 90%+
- Establish reliable fallback patterns for all agents
- Create comprehensive troubleshooting playbooks
```

---

**Versión**: 1.0  
**Creado**: 2025-08-26  
**Próxima revisión**: Basada en incident reports y user feedback  
**Propósito**: Comprehensive troubleshooting guide para enterprise-grade multi-agent system reliability