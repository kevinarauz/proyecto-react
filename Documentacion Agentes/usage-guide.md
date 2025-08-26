# 🎯 Guía de Uso: @coord vs Agentes Especializados

## 📋 Decisión Rápida

> **Regla de Oro**: Usa el agente más específico posible. Usa `@coord` solo cuando necesites orchestración.

---

## 🚦 Cuándo Usar Cada Agente

### ✅ **USA AGENTES DIRECTOS** para:

#### 📊 Análisis Independientes
```bash
# ✅ Correcto - análisis de dominio específico
@arq: evalúa la arquitectura actual del proyecto React
@front: revisa el design system y componentes UI actuales
@qa: analiza la estrategia de testing existente
@devops: evalúa la configuración actual de Vite y build process
```

#### 🔍 Consultas Específicas
```bash
# ✅ Correcto - expertise de dominio
@front: ¿cómo implementar dark mode en PrimeReact?
@qa: ¿qué test cases necesito para el login component?
@arq: ¿debo usar Context API o Redux para state management?
@devops: ¿cómo optimizar el bundle size en Vite?
```

#### 🔎 Revisiones Puntuales
```bash
# ✅ Correcto - review de área específica
@front: revisa este wireframe de la página de posts
@qa: valida estos criterios de aceptación para user stories
@arq: evalúa esta decisión sobre estructura de carpetas FSD
@devops: revisa esta configuración de CI/CD pipeline
```

#### 🐛 Troubleshooting Específico
```bash
# ✅ Correcto - problema de dominio único
@front: ¿por qué este component no se renderiza correctamente?
@qa: ¿cómo testear este hook personalizado?
@arq: ¿esta implementación viola principios SOLID?
```

---

### 🎯 **USA @coord PARA:**

#### 🚀 Workflows Multi-Agente
```bash
# ✅ Correcto - requiere coordinación entre múltiples dominios
@coord: orquesta implementación de nuevo sistema de autenticación
# Involucra: arq (arquitectura JWT) + front (UI login) + qa (test auth) + devops (security)

@coord: gestiona implementación de sistema de comentarios en posts
# Involucra: arq (API design) + front (UI components) + qa (test strategy)
```

#### 🔄 Cambios con Impacto Cross-Cutting
```bash
# ✅ Correcto - afecta múltiples áreas
@coord: gestiona migración de React Router v5 a v6
# Impacta: arquitectura de routing + UI navigation + testing updates

@coord: orquesta migración a React 19 y actualización de dependencies
# Impacta: architecture + UI compatibility + testing + build process
```

#### ⚖️ Resolución de Conflictos
```bash
# ✅ Correcto - decisiones conflictivas entre agentes
@coord: resuelve conflicto entre performance (arq) vs UX requirements (front)
@coord: balancea security requirements (arq) vs usability (front)
```

#### 📈 Planning de Features Complejas
```bash
# ✅ Correcto - features que requieren orchestración
@coord: planifica implementación de real-time chat feature
@coord: diseña strategy para implementar micro-frontends
@coord: orquesta refactoring completo de state management
```

#### 🎨 Rediseños Mayores
```bash
# ✅ Correcto - cambios arquitectónicos significativos
@coord: rediseña completamente el sistema de navegación
@coord: implementa nueva arquitectura de componentes compartidos
```

---

## 📊 Matriz de Decisión Detallada

| Escenario | Agente Directo | @coord | Rationale | Costo Estimado |
|-----------|----------------|--------|-----------|----------------|
| **Revisar código existente** | ✅ @arq | ❌ | Single domain expertise | 1x |
| **Diseñar nueva página** | ✅ @front | ❌ | UI-specific task | 1x |
| **Escribir test cases** | ✅ @qa | ❌ | Testing-specific task | 1x |
| **Configurar deployment** | ✅ @devops | ❌ | Infrastructure-specific | 1x |
| **Nueva feature simple** | ✅ Agente específico | ❌ | Single domain impact | 1x |
| **Nueva feature compleja** | ❌ | ✅ @coord | Multiple agents needed | 4-6x |
| **Refactoring mayor** | ❌ | ✅ @coord | Cross-cutting impact | 5-8x |
| **Performance issue simple** | ✅ @arq o @front | ❌ | Usually single domain | 1x |
| **Performance optimization completa** | ❌ | ✅ @coord | Multiple domains affected | 4-6x |
| **Bug fix simple** | ✅ @qa o agente relevante | ❌ | Single domain | 1x |
| **Bug complex cross-cutting** | ❌ | ✅ @coord | Multiple areas affected | 3-5x |
| **Architecture decision simple** | ✅ @arq | ❌ | Architecture expertise | 1x |
| **Architecture decision con UI impact** | ❌ | ✅ @coord | Multiple domains | 3-4x |
| **Security review** | ✅ @arq | ❌ | Architecture/security domain | 1x |
| **Security implementation** | ❌ | ✅ @coord | Cross-cutting concern | 4-6x |

---

## 🔄 Workflow Decision Tree

```mermaid
graph TD
    START{Nueva tarea/pregunta} --> ANALYZE{Analizar scope y complejidad}
    
    ANALYZE --> SINGLE{¿Afecta un solo dominio?}
    
    SINGLE -->|Sí| SIMPLE{¿Es tarea simple?}
    SINGLE -->|No| MULTI{¿Requiere múltiples agentes?}
    
    SIMPLE -->|Sí| DIRECT[Usar agente directo]
    SIMPLE -->|No| COMPLEX{¿Complejidad alta en dominio?}
    
    COMPLEX -->|Sí| DIRECT
    COMPLEX -->|No| ASSESS{¿Hay dependencias ocultas?}
    
    ASSESS -->|No| DIRECT
    ASSESS -->|Sí| COORD[Usar @coord]
    
    MULTI -->|Sí| COORD
    MULTI -->|No| CONFLICT{¿Hay conflictos potenciales?}
    
    CONFLICT -->|Sí| COORD
    CONFLICT -->|No| DIRECT
    
    DIRECT --> ARQ[@arq - Architecture]
    DIRECT --> FRONT[@front - UI/UX]
    DIRECT --> QA[@qa - Testing]
    DIRECT --> DEVOPS[@devops - Infrastructure]
    
    COORD --> ORCHESTRATE[Coordinator orchestrates workflow]
    ORCHESTRATE --> SEQUENTIAL[Sequential Workflow]
    ORCHESTRATE --> PARALLEL[Parallel Workflow]
    ORCHESTRATE --> ITERATIVE[Iterative Workflow]
```

---

## 🎯 Ejemplos Prácticos por Categoría

### 🔧 **Mantenimiento y Debugging**

#### ✅ Agentes Directos
```bash
# Bug en UI component
@front: ¿por qué el PostCard no muestra el botón de edit correctamente?

# Test que falla
@qa: ¿cómo arreglar este test que falla en el login hook?

# Performance issue específico
@arq: ¿por qué las llamadas a la API tardan tanto?

# Build issue
@devops: ¿por qué falla el build en producción?
```

#### 🎯 Coordinator
```bash
# Bug complejo que afecta múltiples áreas
@coord: investiga por qué el sistema de autenticación falla intermitentemente
# Puede involucrar: arq (JWT validation) + front (UI state) + devops (session management)
```

### 🚀 **Desarrollo de Features**

#### ✅ Agentes Directos
```bash
# Feature UI-only
@front: diseña un component para mostrar estadísticas de posts

# Test específico
@qa: crea test suite para el nuevo ContactForm component

# API simple
@arq: diseña endpoint para obtener posts por usuario

# Deployment simple
@devops: configura environment variables para nueva API
```

#### 🎯 Coordinator
```bash
# Feature completa nueva
@coord: implementa sistema completo de notificaciones push
# Involucra: arq (API + real-time) + front (UI + notifications) + qa (testing) + devops (infrastructure)

# Feature con dependencias complejas
@coord: implementa sistema de roles y permisos
# Involucra: arq (auth design) + front (conditional UI) + qa (security testing) + devops (deployment)
```

### 🔄 **Refactoring y Mejoras**

#### ✅ Agentes Directos
```bash
# Refactor de component específico
@front: refactoriza el Navbar component para mejor reusabilidad

# Optimización de tests
@qa: optimiza la suite de tests para reducir tiempo de ejecución

# Mejora arquitectónica específica
@arq: mejora la estructura de carpetas en /features

# Optimización de build
@devops: optimiza el proceso de build para reducir tiempo
```

#### 🎯 Coordinator
```bash
# Refactor arquitectónico mayor
@coord: migra de Context API a Zustand para state management
# Involucra: arq (design pattern) + front (UI updates) + qa (test updates)

# Optimización completa de performance
@coord: implementa strategy completa de performance optimization
# Involucra: arq (code splitting) + front (lazy loading) + devops (CDN + caching)
```

---

## 💰 Análisis de Costo-Beneficio

### 📊 **Cost Comparison**

| Tipo de Uso | Costo Relativo | Casos de Uso | ROI |
|-------------|----------------|---------------|-----|
| **Agente Directo** | 1x | 80% de tareas diarias | ✅ Alto |
| **Coordinator Simple** | 3-4x | 15% de tareas (features medium) | ✅ Positivo |
| **Coordinator Complex** | 5-8x | 5% de tareas (proyectos críticos) | ⚠️ Depende del impacto |

### 🎯 **ROI por Escenario**

#### ✅ **High ROI - Vale la pena coordinator**
- Implementación de autenticación/autorización
- Sistemas de real-time (chat, notifications)
- Migraciones de tecnología (React Router, state management)
- Refactoring arquitectónico mayor
- Performance optimization completa
- Security implementations

#### ⚠️ **Medium ROI - Evaluar caso por caso**
- Features nuevas con UI compleja
- Integraciones con APIs externas
- Optimizaciones específicas de área
- Debugging de issues complejos

#### ❌ **Low ROI - Usar agentes directos**
- Bug fixes simples
- Updates de UI menores
- Preguntas de clarification
- Reviews de código específico
- Documentation updates
- Component updates simples

---

## 📋 Checklist de Decisión

### Antes de elegir agente, evalúa:

#### **🔍 Scope Analysis**
- [ ] ¿Es una pregunta de un solo dominio?
- [ ] ¿Requiere expertise específico vs orchestración?
- [ ] ¿Hay dependencies entre diferentes áreas?
- [ ] ¿El problema es técnico vs proceso/coordinación?

#### **💼 Impact Assessment**
- [ ] ¿Cuántas áreas del sistema se ven afectadas?
- [ ] ¿Hay riesgo de conflictos entre decisiones?
- [ ] ¿La solución requiere sincronización entre teams/áreas?
- [ ] ¿Es crítico para el negocio vs routine maintenance?

#### **⏱️ Time & Cost Evaluation**
- [ ] ¿Es urgente y necesito respuesta rápida?
- [ ] ¿El costo extra (3-8x) se justifica por el value?
- [ ] ¿Tengo budget de API quota para workflow complejo?
- [ ] ¿Puedo lograr el mismo resultado con agente directo?

#### **🎯 Quality Requirements**
- [ ] ¿Necesito máxima precisión vs respuesta rápida?
- [ ] ¿Hay riesgo alto si me equivoco en la decisión?
- [ ] ¿Requiero validación cruzada entre dominios?
- [ ] ¿Es experimental vs implementation establecida?

---

## 🚀 Quick Reference Commands

### **💡 Common Patterns**

#### **Daily Development (Agentes Directos)**
```bash
# Review matutino
@arq: revisa la arquitectura actual y identifica tech debt
@front: evalúa consistency del design system
@qa: revisa coverage de tests y identifica gaps

# Development iterativo
@front: mejora este component específico
@qa: añade tests para esta función
@arq: valida esta implementación contra best practices
```

#### **Sprint Planning (Coordinator)**
```bash
# Planning de sprint
@coord: planifica implementación de [feature complex]
@coord: evalúa feasibility de [epic] y define roadmap
@coord: orquesta refactoring de [system component]
```

#### **Emergency Response**
```bash
# Issue crítico simple
@arq: diagnostica este performance problem urgente
@devops: ¿por qué falla el deployment en producción?

# Issue crítico complejo  
@coord: maneja este outage que afecta authentication + UI + API
```

---

## 📚 Casos de Estudio

### **Caso 1: Implementar Dark Mode**

#### **❌ Approach Ineficiente**
```bash
@coord: implementa dark mode en la aplicación
# Desperdicio: coordinator para tarea principalmente de front-end
# Costo: 4-5x
```

#### **✅ Approach Eficiente**
```bash
@front: implementa dark mode usando PrimeReact theme system
# Después, si hay issues:
@qa: define test strategy para theme switching
@arq: valida impact en performance de theme switching
# Costo: 1x + 1x + 1x = 3x total, pero solo cuando sea necesario
```

### **Caso 2: Nueva Feature de Chat Real-time**

#### **❌ Approach Ineficiente**
```bash
@arq: diseña WebSocket architecture
@front: diseña UI de chat
@qa: define testing strategy
@devops: configura infrastructure
# Issues: Sin coordinación, posibles incompatibilidades
```

#### **✅ Approach Eficiente**
```bash
@coord: orquesta implementación completa de chat real-time
# Coordinator maneja dependencies y consistency
# Costo: 5-6x pero evita retrabajos y conflictos
```

### **Caso 3: Bug Fix en Login**

#### **✅ Approach Correcto**
```bash
# Si es UI issue
@front: ¿por qué el login form no valida correctamente?

# Si es lógica de auth
@arq: diagnostica problema de authentication flow

# Si es test issue
@qa: ¿por qué fallan los tests de login?
```

#### **❌ Approach Innecesario**
```bash
@coord: maneja bug fix en login form
# Overkill para issue probablemente de single domain
```

---

## 🎯 Recomendaciones Finales

### **🏃‍♂️ Start Fast (Agentes Directos)**
1. Para 80% de tus tareas diarias
2. Análisis, reviews, bug fixes, improvements específicos
3. Cuando necesites respuesta rápida y focused

### **🎯 Scale Smart (Coordinator)**
1. Para 20% de tareas complejas
2. Features nuevas, refactoring mayor, migraciones
3. Cuando el costo extra se justifica por coordination value

### **📊 Monitor & Optimize**
1. Track usage patterns y ROI
2. Ajusta strategy basado en results
3. Documenta lessons learned para future decisions

### **🔄 Iterate & Improve**
1. Start simple, escalate when needed
2. Use coordinator cuando descubres dependencies
3. Build institutional knowledge sobre cuándo usar cada approach

---

## 🚨 **Manejo de Errores en Uso Práctico**

### **Reconocer Cuándo un Agente Está Fallando**

#### **🔍 Señales de Warning**

**Agent Response Quality Issues:**
```bash
# ❌ Respuesta genérica - posible agent overload
@arq: evalúa la arquitectura del proyecto
# Output: "La arquitectura parece estar bien. Hay algunas áreas que podrían mejorarse."
# PROBLEMA: No specific, no actionable, demasiado genérico

# ✅ Response esperada en estado normal
# Output: "Análisis específico de FSD implementation, issues concretos identificados, recommendations precisas"
```

**Context Corruption Signals:**
```bash
# ❌ Agent confunde contexts
@front: diseña UI para el sistema de posts basándote en la arquitectura definida por @arq
# Output menciona: "MongoDB schemas, Express routes, Node.js authentication"
# PROBLEMA: Agente está pensando en backend, no frontend React
```

**Agent Availability Issues:**
```bash
# ❌ Response time excesivo
@coord: planifica implementación de [complex feature]
# > 5 minutes sin response, o respuesta muy breve después de delay
# PROBLEMA: Posible circuit breaker activation necesaria
```

#### **🔄 Recovery Strategies Prácticas**

**Strategy 1: Request Simplification**
```bash
# Original request que falla
@arq: evalúa toda la arquitectura React + implementa migration strategy + optimize performance + update security

# ⬇️ Simplify progresivamente
@arq: evalúa únicamente la current React architecture structure usando FSD

# ⬇️ Más simple
@arq: list las principales carpetas arquitectónicas del proyecto src/

# ⬇️ Minimal viable request
@arq: confirma que el proyecto usa Feature-Sliced Design
```

**Strategy 2: Context Reset**
```bash
# Si agente parece confundido
@front: [previous context confuso] diseña nuevo component...
# ❌ Output inconsistente

# ✅ Reset context approach
@front: sin considerar conversación previa, revisa el design system actual del proyecto React con PrimeReact

# ✅ Fresh start approach
@front: starting fresh - evalúa la UI consistency del proyecto actual
```

**Strategy 3: Agent Substitution**
```bash
# Primary agent fails
@arq: [consistently poor responses about architecture]

# Fallback a coordinator en mode específico
@coord: actúa como architecture consultant y evalúa la estructura React usando FSD principles

# Alternative fallback a validator
@validator: desde perspectiva de architecture quality, evalúa la current project structure
```

---

### **🎯 Error Recovery Workflows Paso a Paso**

#### **Workflow Type 1: Single Agent Failure**

**Scenario:** @arq falla repetitivamente
```bash
# Step 1: Detect pattern
@arq: evalúa arquitectura (respuesta vaga o incompleta)
@arq: analiza performance (otra respuesta poor quality)
@arq: revisa security (third failure)

# Step 2: Circuit breaker mental activation
# Usuario reconoce pattern de 3 failures

# Step 3: Fallback hierarchy
# Level 1: Simplify request
@arq: list únicamente las carpetas principales de src/

# Level 2: Agent substitution
@coord: en role de architect, evalúa project structure

# Level 3: Manual fallback
# Consultar documentation directo, tomar decisión manual
```

#### **Workflow Type 2: Context Transfer Failure**

**Scenario:** Information perdida entre agentes
```bash
# Expected workflow
@arq: diseña JWT authentication strategy
# Output: Detailed JWT implementation plan

@front: basándote en la auth strategy de @arq, diseña login UI
# Output: UI que no considera JWT requirements específicos
# PROBLEMA: Context no transferred correctly

# Recovery workflow
# Step 1: Context audit
# Review que specific information needed transferir

# Step 2: Explicit context bridging
@front: usando específicamente estos JWT requirements de @arq: [copy exact requirements], diseña login UI

# Step 3: Cross-validation
@validator: verifica que frontend design es consistent con JWT authentication approach
```

#### **Workflow Type 3: Multi-Agent Coordination Failure**

**Scenario:** Conflictos entre múltiples agentes
```bash
# Problem scenario
@arq: recomienda usar Zustand para state management
@front: sugiere usar Context API para simplicidad  
@qa: prefiere Redux para testing easiness

# Recovery workflow
# Step 1: Conflict identification
@coord: identifica y analiza conflict entre state management approaches

# Step 2: Resolution facilitation
@coord: facilita decision entre Zustand vs Context API vs Redux considerando project requirements

# Step 3: Consensus building  
@coord: una vez decidido, crea implementation plan que todos los agentes puedan support
```

---

### **📊 Realistic Usage Examples con Error Handling**

#### **Example 1: Daily Development con Fallbacks**

**Morning Architecture Review:**
```bash
# Primary approach
@arq: evalúa tech debt en el proyecto React actual

# Si quality pobre, fallback progression
@arq: identifica top 3 architecture issues únicamente

# Si sigue poor, agent substitution
@coord: en architect mode, identifica main structural concerns

# Si todo falla, manual approach
# Consultar FSD documentation + hacer review manual del código
```

**Feature Development con Error Resilience:**
```bash
# Start optimistic
@coord: orquesta implementación de dark mode feature

# Si coordinator overloaded, decompose
@arq: analiza únicamente requirements de theme switching architecture
@front: diseña únicamente UI toggle component
@qa: define únicamente critical test cases

# Si individual agents fail, further simplify
@front: confirma que PrimeReact soporta theme switching
@qa: list minimum test cases para theme functionality
```

#### **Example 2: Complex Workflow con Circuit Breaker**

**New Feature Implementation:**
```bash
# Attempt 1: Full workflow
@coord: implementa sistema completo de notificaciones push
# Resultado: Overloaded response, inconsistent plan

# Circuit breaker activation - decompose
@coord: planifica únicamente backend infrastructure para notifications

# Success? Continue with next component
@coord: basándote en notification infrastructure, planifica frontend UI

# Build incrementally
@coord: con backend + frontend ready, planifica testing strategy
```

#### **Example 3: Emergency Response con Degradation**

**Production Issue Troubleshooting:**
```bash
# Urgent production issue
@devops: diagnostica problema deployment crítico en production
# No response o response inadequate

# Immediate fallback
@coord: en infrastructure consultant mode, troubleshoot deployment issue

# Still failing? Emergency degradation
@arq: list possible causes de deployment failures

# Manual emergency response
# Consult deployment documentation, check logs manually
```

---

### **🎯 Best Practices Actualizadas con Error Resilience**

#### **Request Planning con Error Prevention**

**Before cada agent request:**
```bash
# 1. Check agent recent performance
# ¿Ha respondido bien el agente recent conversations?

# 2. Assess request complexity
# ¿Es esto too complex para single agent request?

# 3. Prepare fallback strategy  
# ¿Qué haré si este agente no responde well?

# 4. Set quality expectations
# ¿Qué minimum quality necesito para consider success?
```

**Request Formulation con Redundancy:**
```bash
# ✅ Primary request con context claro
@arq: usando FSD principles, evalúa current project structure en src/ y identifica violations

# ✅ Include fallback instructions implícitas
# Si request too complex, focus únicamente en carpetas principales

# ✅ Context self-contained
# Incluye toda información necesaria en single request
```

#### **Quality Gate Integration**

**After cada agent response, evalúa:**
```bash
# Completeness check
- ¿Response addresses all parts del request?
- ¿Includes actionable recommendations?
- ¿Format es consistent y usable?

# Accuracy validation  
- ¿Information es technically correct?
- ¿Consistent con project context?
- ¿No contradicts previous good decisions?

# Actionability assessment
- ¿Can implement recommendations directly?
- ¿Clear next steps provided?
- ¿Dependencies claramente identified?
```

**Quality threshold decision:**
```bash
# High quality (95%+) - Proceed normally
# Good quality (80-95%) - Proceed con minor clarifications
# Poor quality (60-80%) - Retry con simplified request
# Failure quality (<60%) - Activate fallback strategy
```

---

### **🔄 Adaptive Usage Patterns**

#### **Learning from Failure Patterns**

**Weekly Agent Performance Review:**
```bash
# Track cual agentes han sido reliable
@arq: consistently good → Use freely
@front: occasional issues → Monitor closely
@coord: recent overloads → Use selectively

# Adjust usage patterns
- Use reliable agents para daily tasks
- Prepare fallbacks para problematic agents
- Monitor recovery de agents en degradation
```

#### **Context Size Management**

**Dynamic Context Adjustment:**
```bash
# Start with minimal context
@arq: evalúa current React project architecture

# Add context incrementally si needed
@arq: considerando que usamos PrimeReact + FSD, evalúa architecture consistency

# Full context only when necessary
@arq: basándote en previous decisions sobre JWT + routing + state management, evalúa complete integration
```

#### **Proactive Error Prevention**

**Daily Usage Hygiene:**
```bash
# Morning agent health check
@arq: quick check - ¿puedes acceder a React best practices?
@front: quick check - ¿familiar con PrimeReact components?

# Use check results para guide día usage
# High confidence → Proceed con complex requests
# Medium confidence → Use simpler, focused requests  
# Low confidence → Prepare fallbacks, use minimal requests
```

---

### **📈 ROI Optimization con Error Handling**

#### **Cost-Benefit Analysis Actualizado**

**Factor in Error Recovery Costs:**
```yaml
usage_cost_analysis:
  normal_agent_request: 1x
  agent_retry: +0.5x
  fallback_agent: +1x
  coordinator_rescue: +2x
  manual_fallback: +0.5x_time + research_effort
  
total_real_world_cost_ranges:
  simple_request: 1x - 2x (including potential retry)
  medium_request: 1x - 3x (including potential fallback)
  complex_request: 3x - 8x (including coordination overhead)
```

**ROI Decision Framework:**
```bash
# Quick daily tasks (expected <2x cost)
✅ Use agentes directos freely
⚠️ Have simple fallback ready

# Medium complexity (expected 2-4x cost)  
✅ Check agent availability first
✅ Prepare fallback strategy
⚠️ Consider if worth the complexity

# High complexity (expected 4-8x cost)
✅ Only for high-impact tasks
✅ Full error recovery plan
✅ Timeline buffer para failures
```

---

**Versión**: 2.0  
**Última actualización**: 2025-08-26  
**Próxima revisión**: Basada en usage patterns, error analytics y feedback  
**Changelog**: Agregado comprehensive error handling examples, recovery workflows y best practices actualizadas
