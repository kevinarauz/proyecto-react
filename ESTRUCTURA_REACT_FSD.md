# 📋 Guía de Estructura de Proyecto React - Feature-Sliced Design

## 🏗️ Estructura Base

```
/src
├── app/                     # 🎯 Configuración y punto de entrada
│   ├── providers/
│   │   ├── with-router.tsx
│   │   ├── with-theme.tsx
│   │   └── index.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   └── index.tsx
│
├── pages/                   # 📄 Páginas - Solo composición
│   ├── home/
│   │   └── index.tsx
│   ├── profile/
│   │   └── index.tsx
│   └── products/
│       └── index.tsx
│
├── widgets/                 # 🧩 Bloques complejos de UI
│   ├── Header/
│   │   ├── ui/
│   │   │   └── Header.tsx
│   │   └── index.ts
│   ├── Sidebar/
│   └── ProductFilters/
│
├── features/               # ⚡ Interacciones del usuario
│   ├── auth/
│   │   ├── by-credentials/
│   │   │   ├── ui/
│   │   │   │   └── LoginForm.tsx
│   │   │   ├── model/
│   │   │   │   └── useLogin.ts
│   │   │   └── index.ts
│   │   └── logout/
│   ├── product/
│   │   ├── add-to-cart/
│   │   └── toggle-favorite/
│   └── user/
│       └── update-profile/
│
├── entities/               # 🏗️ Modelos de negocio
│   ├── user/
│   │   ├── model/
│   │   │   ├── types.ts
│   │   │   ├── store.ts
│   │   │   └── index.ts
│   │   ├── api/
│   │   │   └── userApi.ts
│   │   ├── ui/
│   │   │   ├── Avatar/
│   │   │   └── UserCard/
│   │   └── index.ts
│   ├── product/
│   └── order/
│
└── shared/                 # 🔧 Código reutilizable agnóstico
    ├── ui/
    │   ├── Button/
    │   │   ├── Button.tsx
    │   │   ├── Button.module.css
    │   │   ├── Button.test.tsx
    │   │   ├── Button.stories.tsx
    │   │   └── index.ts
    │   ├── Modal/
    │   ├── Input/
    │   └── index.ts
    ├── api/
    │   ├── base.ts
    │   └── interceptors.ts
    ├── lib/
    │   ├── formatters.ts
    │   ├── validators.ts
    │   └── utils.ts
    ├── config/
    │   ├── constants.ts
    │   ├── paths.ts
    │   └── env.ts
    └── hooks/
        ├── useLocalStorage.ts
        └── useDebounce.ts
```

## 📚 Descripción de Capas

### 🎯 **App** - Orquestador Global
- **Propósito**: Configuración inicial de la aplicación
- **Contenido**: Providers, estilos globales, punto de entrada
- **Importa de**: pages, providers, shared

### 📄 **Pages** - Vistas de Aplicación
- **Propósito**: Páginas que corresponden a rutas
- **Contenido**: Solo composición de widgets y features
- **Importa de**: widgets, features, entities, shared

### 🧩 **Widgets** - Bloques Complejos de UI
- **Propósito**: Componentes complejos y reutilizables
- **Ejemplos**: Header, Sidebar, ProductFilters
- **Importa de**: features, entities, shared

### ⚡ **Features** - Interacciones del Usuario
- **Propósito**: Lógica específica de interacción
- **Ejemplos**: login, add-to-cart, logout
- **Estructura interna**: `ui/`, `model/`, `api/`
- **Importa de**: entities, shared

### 🏗️ **Entities** - Modelos de Negocio
- **Propósito**: Los "sustantivos" del dominio
- **Ejemplos**: user, product, order
- **Estructura interna**: `model/`, `api/`, `ui/`
- **Importa de**: shared

### 🔧 **Shared** - Código Agnóstico
- **Propósito**: Código 100% reutilizable
- **Contenido**: UI básico, utilidades, configuración
- **Importa de**: Nada (es la base)

## 🎯 Reglas de Importación

```typescript
// ✅ PERMITIDO - Solo hacia capas inferiores
app → pages → widgets → features → entities → shared

// ❌ PROHIBIDO - Nunca hacia capas superiores
shared ↛ entities ↛ features ↛ widgets ↛ pages ↛ app
```

### Ejemplos de Importaciones

```typescript
// ✅ Correcto
// pages/home/index.tsx
import { Header } from 'widgets/Header'
import { LoginForm } from 'features/auth/by-credentials'
import { UserCard } from 'entities/user'
import { Button } from 'shared/ui'

// ❌ Incorrecto
// entities/user/model/store.ts
import { LoginForm } from 'features/auth/by-credentials' // ❌ Hacia arriba
```

## 📁 Convenciones de Archivos

### Colocation - Archivos Relacionados Juntos

```
/Button
├── Button.tsx          # Componente principal
├── Button.module.css   # Estilos específicos
├── Button.test.tsx     # Pruebas unitarias
├── Button.stories.tsx  # Casos para Storybook
└── index.ts            # Exportador público
```

### Barrel Exports (index.ts)

```typescript
// shared/ui/index.ts
export { Button } from './Button'
export { Modal } from './Modal'
export { Input } from './Input'

// features/auth/by-credentials/index.ts
export { LoginForm } from './ui/LoginForm'
export { useLogin } from './model/useLogin'
```

## 🛣️ Gestión de Rutas

### Rutas Centralizadas

```typescript
// shared/config/paths.ts
export const PATHS = {
  HOME: '/',
  PROFILE: '/profile',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id: string) => `/products/${id}`,
  USER_SETTINGS: '/profile/settings',
} as const

// Tipo para autocompletado
export type AppPath = typeof PATHS[keyof typeof PATHS]
```

### Uso en Componentes

```typescript
import { PATHS } from 'shared/config/paths'

// En JSX
<Link to={PATHS.PROFILE}>Mi Perfil</Link>
<Link to={PATHS.PRODUCT_DETAIL('123')}>Ver Producto</Link>

// En navegación programática
navigate(PATHS.HOME)
```

## 🎨 Gestión de Estilos

### Variables CSS Globales

```css
/* app/styles/variables.css */
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --border-radius: 0.375rem;
}
```

### Estilos por Componente

```css
/* Button/Button.module.css */
.button {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  background: var(--color-primary);
}

.secondary {
  background: var(--color-secondary);
}
```

## 🧪 Testing y Documentación

### Estructura de Tests

```typescript
// Button/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

### Storybook Stories

```typescript
// Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Shared/UI/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}
```

## 📦 Tipos TypeScript

### Tipos por Entidad

```typescript
// entities/user/model/types.ts
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface CreateUserDto {
  name: string
  email: string
  password: string
}
```

### Tipos Shared

```typescript
// shared/types/common.ts
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export type Status = 'idle' | 'loading' | 'success' | 'error'
```

## 🚀 Beneficios de Esta Estructura

- **Escalabilidad**: Crece sin complejidad exponencial
- **Mantenibilidad**: Cambios localizados y predecibles
- **Reutilización**: Código compartido de forma inteligente
- **Testing**: Fácil testear por capas y funcionalidades
- **Colaboración**: Equipos pueden trabajar independientemente
- **Refactoring**: Cambios seguros con dependencias claras

## 💡 Consejos Adicionales

1. **Usa linters** para enforcar reglas de importación
2. **Documenta decisiones arquitectónicas** importantes
3. **Revisa regularmente** la adherencia a las reglas
4. **Capacita al equipo** en los principios de FSD
5. **Evoluciona gradualmente** desde estructuras simples

---

Esta estructura es la base para aplicaciones React modernas, escalables y mantenibles. ¡Perfecta para proyectos desde medianos hasta enterprise! 🏆