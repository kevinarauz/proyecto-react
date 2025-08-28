# React Learning Project con Feature-Sliced Design

Este es un proyecto de React para aprendizaje que implementa la arquitectura **Feature-Sliced Design (FSD)**.

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción  
- `npm run preview` - Previsualiza la aplicación construida
- `npm run lint` - Ejecuta el linter para revisar el código

## Arquitectura Feature-Sliced Design

Este proyecto sigue la metodología FSD para escalabilidad y mantenibilidad:

```
src/
├── app/                    # 🎯 Configuración global
│   └── providers/         # Router, Auth, providers globales
│       ├── auth/         # Context de autenticación
│       ├── with-router.tsx
│       └── ProtectedRoute.tsx
├── pages/                 # 📄 Páginas por ruta
│   ├── home/             # Página de inicio
│   ├── about/            # Página acerca de  
│   ├── contact/          # Página de contacto
│   ├── posts/            # Página de gestión de posts
│   └── login/            # Página de login
├── widgets/               # 🧩 Componentes complejos reutilizables
│   ├── Navbar/           # Barra de navegación con auth
│   └── Footer/           # Pie de página
├── features/              # ⚡ Funcionalidades específicas
│   ├── auth/login/       # Sistema de autenticación
│   ├── contact/send-message/  # Feature de formulario de contacto
│   ├── post-create/      # Feature crear posts
│   ├── post-edit/        # Feature editar posts  
│   ├── post-list/        # Feature listar posts con DataTable
│   └── post-delete/      # Feature eliminar posts
├── entities/              # 🏗️ Modelos de negocio
│   ├── user/             # Entidad usuario con auth
│   ├── navigation/       # Entidad de navegación
│   └── post/             # Entidad posts con API
└── shared/                # 🔧 Código agnóstico reutilizable
    ├── ui/               # Componentes UI (Loading, Spinner)
    ├── config/           # Configuraciones (rutas, constantes)
    └── lib/              # Librerías y utilidades
```

## Reglas de Importación FSD

```typescript
// ✅ PERMITIDO - Solo hacia capas inferiores
app → pages → widgets → features → entities → shared

// ❌ PROHIBIDO - Nunca hacia capas superiores  
shared ↛ entities ↛ features ↛ widgets ↛ pages ↛ app
```

## Path Aliases configurados

Los imports utilizan aliases absolutos configurados en `vite.config.ts` y `tsconfig.app.json`:

- `shared/lib` → `src/shared/lib`
- `shared/ui` → `src/shared/ui`
- `entities/user` → `src/entities/user`
- `entities/navigation` → `src/entities/navigation`
- `entities/post` → `src/entities/post`
- `features/auth/login` → `src/features/auth/login`
- `features/contact/send-message` → `src/features/contact/send-message`
- `features/post-create` → `src/features/post-create`
- `features/post-edit` → `src/features/post-edit`
- `features/post-list` → `src/features/post-list`
- `features/post-delete` → `src/features/post-delete`
- `widgets/Navbar` → `src/widgets/Navbar`
- `widgets/Footer` → `src/widgets/Footer`
- `pages/home` → `src/pages/home`
- `pages/posts` → `src/pages/posts`
- `pages/login` → `src/pages/login`
- `app/providers` → `src/app/providers`

## Tecnologías utilizadas

- React 18
- TypeScript
- Vite (con path aliases configurados)
- React Router DOM
- PrimeReact
- PrimeFlex  
- PrimeIcons
- ESLint

## Cómo empezar

1. Instala las dependencias: `npm install`
2. Inicia el servidor de desarrollo: `npm run dev`
3. Abre tu navegador en la URL mostrada (ej: `http://localhost:5173`)

## Instalación de dependencias adicionales

### React Router DOM
```bash
npm install react-router-dom
```

### PrimeReact + PrimeFlex + PrimeIcons  
```bash
npm install primereact primeicons primeflex
```

## Funcionalidades implementadas

### 🔐 Sistema de Autenticación
- **Login**: Usuario `kevin`, contraseña `12345`
- **Persistencia**: Estado guardado en localStorage
- **Rutas protegidas**: Todas las páginas requieren autenticación excepto login
- **Redirección automática**: Login exitoso → Home, logout → Login
- **Context global**: AuthProvider con hooks useAuth

### 📝 Sistema de Posts (CRUD Completo)
- **DataTable avanzado**: PrimeReact con paginación (10 registros/página)
- **Búsqueda global**: Filtrado en tiempo real por título, contenido y autor
- **Crear posts**: Formulario con validación para nuevos posts
- **Editar posts**: Modificación inline de posts existentes
- **Eliminar posts**: Modal de confirmación antes de eliminar
- **API Integration**: JSONPlaceholder para datos mock
- **Optimizaciones**: React.memo para mejorar performance
- **Responsive design**: Adaptado para móvil y desktop

### 🎨 Componentes UI
- **Loading**: Componente con 3 tamaños y spinner SVG animado
- **Spinner**: SVG independiente con animaciones CSS
- **Footer**: Información del proyecto y tecnologías
- **Navbar**: Navegación con estado de autenticación y logout
- **DataTable**: Implementación avanzada con ordenamiento y filtros
- **ConfirmDialog**: Modales de confirmación para acciones destructivas

### 🛣️ Navegación
- **Ruta por defecto**: `/` redirige a `/login`
- **Rutas públicas**: `/login`
- **Rutas protegidas**: `/home`, `/about`, `/contact`, `/posts`
- **ProtectedRoute**: Componente que verifica autenticación

## Flujo de la aplicación

1. **Inicio**: App carga en `/login`
2. **Autenticación**: Login con credenciales mock
3. **Navegación**: Acceso a páginas protegidas tras login
4. **Persistencia**: Sesión se mantiene al refrescar
5. **Logout**: Regresa al login y limpia sesión

## 🤖 Sistema Multi-Agent Claude Code Terminal (v2.3.0)

Este proyecto incluye un **sistema avanzado de agentes especializados** para desarrollo colaborativo en **Claude Code Terminal**.

### 🔧 **Características del Sistema**
- **14 Agentes Especializados**: Cada uno con expertise específico
- **Sintaxis Específica**: `@agent-nombre` exclusiva para Claude Code Terminal
- **Generación de Archivos**: Los agentes crean documentos y código automáticamente
- **Ejecución Individual**: Cada agente se ejecuta por separado, no en batch

### Agentes Disponibles (14 Agentes Especializados)

| Agent | Role | Sintaxis Claude Code | Funcionalidad |
|-------|------|---------------------|---------------|
| **@agent-product** | Product Owner | `@agent-product [task]` | Define user stories y criterios aceptación |
| **@agent-arq** | Software Architect | `@agent-arq [task]` | Analiza arquitectura y decisiones técnicas |
| **@agent-front** | Frontend Designer | `@agent-front [task]` | Diseña UI/UX y componentes frontend |
| **@agent-qa** | QA Engineer | `@agent-qa [task]` | Crea estrategias de testing y QA |
| **@agent-backend** | Backend Engineer | `@agent-backend [task]` | Diseña APIs y arquitectura backend |
| **@agent-dba** | Database Administrator | `@agent-dba [task]` | Optimiza BD, schemas y performance 🆕 |
| **@agent-devops** | Platform Engineer | `@agent-devops [task]` | Configura CI/CD e infraestructura |
| **@agent-coord** | Technical Lead | `@agent-coord [task]` | Orquesta workflows y coordinación |
| **@agent-validator** | Integration Validator | `@agent-validator [task]` | Valida consistencia entre outputs |
| **@agent-workflow** | Workflow Intelligence | `@agent-workflow [task]` | Optimiza secuencias de ejecución |
| **@agent-ai-resolver** | AI Conflict Resolution | `@agent-ai-resolver [task]` | Resuelve conflictos entre agentes |
| **@agent-performance** | Performance Engineer | `@agent-performance [task]` | Optimiza rendimiento y performance |
| **@agent-reporting** | Analytics & Metrics | `@agent-reporting [task]` | Genera dashboards y métricas 🆕 |
| **@agent-dios** | Beast Mode Agent | `@agent-dios [task]` | Resolución autónoma con research 🆕 |

### Quick Start con Agentes

**⚠️ IMPORTANTE: En Claude Code Terminal los agentes se ejecutan con sintaxis específica:**

```bash
# 1. Planificación estratégica
@agent-coord plan implementation of new Excel export feature

# 2. Seguir roadmap generado
@agent-arq design architecture for Excel generation
@agent-backend design APIs for data export functionality  
@agent-dba optimize database queries for large dataset exports
@agent-front design UI for export functionality
@agent-performance analyze performance impact of Excel generation
@agent-qa create testing strategy for Excel export
@agent-devops setup CI/CD for new feature

# 3. Validación
@agent-validator validate consistency across all outputs
```

**Sintaxis correcta de ejecución:**
- ✅ `@agent-nombre` - Funciona en Claude Code Terminal
- ❌ `@nombre:` - NO funciona, es solo documentación
- ❌ `/agents nombre` - NO es la sintaxis correcta

### Estructura del Sistema

```
.claude/agents/              # 🤖 Agentes ejecutables (14 agentes)
├── product.md              # Product Owner Agent
├── arq.md                  # Architecture Agent  
├── front.md                # Frontend Agent
├── qa.md                   # QA Agent
├── backend.md              # Backend Agent
├── dba.md                  # Database Agent 🆕
├── devops.md               # DevOps Agent
├── qa.md                   # QA Agent
├── backend.md              # Backend Agent
├── devops.md               # DevOps Agent
├── coord.md                # Coordinator Agent
├── validator.md            # Validator Agent
├── workflow.md             # Workflow Intelligence Agent
├── ai-resolver.md          # AI Conflict Resolution Agent
├── performance.md          # Performance Engineering Agent
├── reporting.md            # Analytics & Metrics Agent 🆕
└── dios.md                 # Beast Mode Agent (v3.1) 🆕

Documentacion Agentes/       # 📚 Documentación del sistema
├── README.md               # System overview (v2.3.0)
├── contracts.md            # Interface contracts
├── workflows.md            # Workflow definitions
├── execution-mechanics.md  # System mechanics + Error Handling
├── implementation-guide.md # Usage guidelines
├── usage-guide.md          # Usage examples + Error Recovery
└── troubleshooting-guide.md # Enterprise Troubleshooting Playbook 🆕
```

### Features Avanzadas (v2.3.0)

#### 🎯 **Core Intelligence**
- **🧠 Workflow Intelligence**: Auto-detección del tipo de workflow óptimo
- **🤖 AI Conflict Resolution**: Resolución de conflictos con ML
- **🔄 Orquestación Manual**: Coordinación estratégica entre agentes (requiere ejecución manual)
- **✅ Validación Cruzada**: Verificación de consistencia entre outputs
- **📊 Quality Gates**: Métricas y umbrales de calidad automatizados
- **⚡ Performance Engineering**: Optimización y monitoreo de rendimiento end-to-end

#### 🆕 **Nuevas Capacidades v2.3.0**
- **🚨 Sistema de Error Handling Enterprise**: Circuit breakers, fallback strategies
- **📈 Analytics & Reporting**: Dashboard ejecutivo con métricas de sistema
- **🤖 Beast Mode Agent**: Resolución autónoma con investigación web recursiva
- **🔧 Troubleshooting Playbook**: SOPs y procedimientos de recuperación
- **📊 Monitoreo de Salud**: Detección automática de fallos de agentes
- **🛡️ Degradación Graceful**: Sistemas de respaldo jerárquicos

### 💻 Funcionalidades Excel Integration

- **ExcelGenerator**: Generador de Excel con formato profesional
- **Dependencies**: xlsx + file-saver instalados
- **HTML Generator**: Generador standalone para pruebas

```typescript
// Ejemplo de uso
const excelGenerator = new ExcelGenerator();
await excelGenerator.generateDocument(documentData);
```

## 📋 Notas importantes

### 🔧 **Técnicas**
- **Versiones compatibles**: Las dependencias están configuradas para Node.js v18
- **FSD Template**: Este proyecto sirve como template para futuros proyectos escalables
- **TypeScript**: Path mappings configurados para IntelliSense completo
- **Excel Generation**: Sistema completo para generación de documentos Excel
- **⚡ Performance Engineering**: Sistema de optimización continua implementado

### 🤖 **Multi-Agent System (v2.3.0)**
- **13 Agentes Especializados**: Sistema nivel enterprise con error handling completo
- **Beast Mode (@dios)**: Agent autónomo con investigación web recursiva
- **Reporting System (@reporting)**: Analytics y métricas de rendimiento en tiempo real
- **Circuit Breaker Patterns**: Recuperación automática de fallos de agentes
- **Enterprise Troubleshooting**: Playbook completo con SOPs y procedimientos

### 🔒 **Seguridad y Producción**
- **Credenciales mock**: Solo para desarrollo - cambiar en producción
- **localStorage**: Persistencia básica - considerar tokens JWT en producción
- **Agent Security**: Validación de outputs y filtrado de contenido malicioso

### 📚 **Documentación Completa**
- **Troubleshooting Guide**: Procedimientos de emergencia y recuperación
- **Execution Mechanics**: Cómo funciona realmente el sistema multi-agente
- **Usage Examples**: Casos de uso prácticos con manejo de errores

---

## 🚨 Sistema de Error Handling Enterprise (v2.3.0)

### 🔧 **Características Principales**

#### **Circuit Breaker Patterns**
```yaml
failure_thresholds:
  architecture: 2 failures → 5min timeout
  frontend: 2 failures → 5min timeout  
  qa: 3 failures → 5min timeout
  coordinator: 3 failures → 10min timeout
```

#### **Fallback Hierarchy (4 Niveles)**
1. **Request Simplification**: Reduce scope y complexity
2. **Agent Substitution**: Use coordinator en mode específico  
3. **Context Reset**: Fresh start sin previous context
4. **Manual Override**: Consultation directo de documentation

#### **Señales de Agent Failure**
- **Response Quality Issues**: Respuestas genéricas, vagas o incompletas
- **Context Corruption**: Agent menciona tecnologías incorrectas para el proyecto
- **Response Time Issues**: Delays excesivos (>5 min) o timeouts

### 🆕 **Agentes Nuevos v2.3.0**

#### **@agent-reporting - Analytics & Metrics Agent**
```bash
# Genera dashboards ejecutivos con métricas del sistema
@agent-reporting generate comprehensive system health dashboard

# Características:
- KPIs consolidados de todos los agentes
- Análisis de rendimiento y eficiencia 
- Identificación de cuellos de botella
- Recomendaciones de optimización
- Alertas críticas y tendencias
```

#### **@agent-dios - Beast Mode Agent (v3.1)**
```bash
# Resolución autónoma de problemas complejos
@agent-dios research and implement authentication system with JWT

# Características únicas:
- Investigación web recursiva automática
- Ejecución autónoma hasta completar la tarea
- Validación con fuentes externas
- Testing riguroso de soluciones
- No requiere intervención manual
```

### 📚 **Documentación Enterprise Completa**

#### **Troubleshooting Playbook**
- **🔥 Emergencias**: Procedimientos de resolución inmediata
- **🔧 Workflows Diagnósticos**: Health checks diarios y semanales  
- **🛡️ Decision Trees**: Matrices de fallback por tipo de agente
- **📊 Error Monitoring**: Dashboard manual de métricas de salud
- **🔄 Recovery SOPs**: Procedimientos estándar operativos

#### **Execution Mechanics**
- **⚠️ Limitaciones Reales**: El coordinator NO ejecuta agentes automáticamente
- **🔄 Patterns Reales**: Workflows manuales con handoffs explícitos
- **🎯 Rol del Coordinator**: Strategic planner, no automation engine

### 🎯 **Quick Start Actualizado**

#### **Para Desarrollo Normal**
```bash
# Planificación estratégica
@agent-coord plan implementation of user profile feature

# Ejecución manual paso a paso
@agent-arq design architecture for user profile [context from coord]
@agent-front design UI for user profile [context from arq]
@agent-qa create test strategy for user profile [context from arq + front]
```

#### **Para Problemas Complejos**
```bash
# Investigación autónoma completa
@agent-dios research and implement complete Excel export system

# Analytics del sistema
@agent-reporting analyze current agent performance and system health
```

#### **Para Troubleshooting**
```bash
# Consultar guías específicas
# Ver: Documentacion Agentes/troubleshooting-guide.md

# Agent health check rápido
@agent-arq confirm access to React architecture knowledge
@agent-front confirm access to PrimeReact component knowledge
```

---

## 🎯 **Sistema Estado: PRODUCTIVO**

**Última Actualización**: 2025-08-26  
**Versión Sistema Multi-Agente**: v2.3.0  
**Estado de Salud**: 🟢 Operativo (con error handling completo)  
**Agentes Activos**: 13/13  
**Documentación**: 📚 Completa con troubleshooting enterprise

### 🚀 **Roadmap v2.4.0**
- [ ] **Agent Health Monitoring**: Métricas automáticas en tiempo real
- [ ] **Predictive Failure Detection**: ML para prevención de errores  
- [ ] **Cross-Agent Learning**: Patterns y optimización automática
- [ ] **Performance Budget Integration**: Monitoreo continuo de rendimiento