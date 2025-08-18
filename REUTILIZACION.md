# Guía de Reutilización del Proyecto

## Objetivo

Este proyecto está estructurado para facilitar la reutilización de componentes y configuraciones en futuros proyectos React.

## Estructura de Reutilización

```
src/
├── lib/                    ← Carpeta clave para reutilización
│   ├── index.ts           ← Punto único de entrada
│   └── primereact.ts      ← Importaciones centralizadas de PrimeReact
├── components/            ← Componentes reutilizables
└── assets/               ← Recursos estáticos
```

## Cómo reutilizar en un nuevo proyecto

### 1. Copiar archivos clave

**Archivos de configuración:**
```bash
# Copiar estos archivos a la raíz del nuevo proyecto
package.json              # Dependencias (solo las que necesites)
tsconfig.json            # Configuración TypeScript
tsconfig.app.json        # Config específica de la app
vite.config.ts           # Configuración de Vite
eslint.config.js         # Configuración ESLint
```

**Carpeta lib completa:**
```bash
# Copiar toda la carpeta lib/ 
src/lib/                 # Importaciones centralizadas
```

**CSS base:**
```bash
src/index.css            # Configuración de PrimeReact/PrimeFlex
```

### 2. Instalar dependencias

En el nuevo proyecto:
```bash
# Dependencias principales
npm install react react-dom react-router-dom

# PrimeReact ecosystem
npm install primereact primeicons primeflex

# DevDependencies
npm install -D typescript @types/react @types/react-dom
npm install -D vite @vitejs/plugin-react
npm install -D eslint typescript-eslint
```

### 3. Usar importaciones centralizadas

```jsx
// ✅ En lugar de esto
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'

// ✅ Usa esto
import { useState, Card, Button, InputText } from '../lib'
```

## Componentes reutilizables creados

### Navbar con PrimeReact Menubar
```jsx
import { Link, Menubar, MenuItem } from '../lib'

// Implementación ya lista para copiar
```

### Formularios con FloatLabel
```jsx
import { useState, Card, InputText, Button, FloatLabel } from '../lib'

// Patrón establecido para formularios
```

### Cards informativos
```jsx
import { Card, Chip } from '../lib'

// Layout estándar para contenido
```

## Ventajas de esta estructura

### ✅ **Reutilización rápida:**
- Copia `src/lib/` → Listo para usar
- Imports unificados en un solo lugar
- Configuración CSS lista

### ✅ **Mantenimiento centralizado:**
- Actualizaciones de PrimeReact en un archivo
- Cambio de versiones centralizado
- Control de dependencias

### ✅ **Escalabilidad:**
- Agregar nuevos componentes es fácil
- Estructura predecible
- TypeScript configurado

### ✅ **Portabilidad:**
- Sin dependencias específicas del proyecto
- Configuración independiente
- Plug & play

## Pasos para nuevo proyecto desde cero

1. **Crear proyecto Vite + React + TypeScript:**
```bash
npm create vite@latest mi-nuevo-proyecto -- --template react-ts
cd mi-nuevo-proyecto
```

2. **Copiar archivos de este proyecto:**
```bash
# Copiar configuraciones
cp package.json tsconfig.json vite.config.ts eslint.config.js

# Copiar lib y CSS
cp -r src/lib/ src/
cp src/index.css src/
```

3. **Instalar dependencias:**
```bash
npm install
```

4. **¡Empezar a desarrollar con PrimeReact listo!**

## Comandos incluidos

```bash
npm run dev          # Desarrollo
npm run build        # Construcción
npm run lint         # Verificación de código
npm run preview      # Preview de build
```

## Próximos pasos para expandir

- Agregar más componentes a `src/lib/primereact.ts`
- Crear utilidades comunes en `src/lib/utils.ts`
- Establecer temas personalizados
- Agregar contextos globales (auth, theme, etc.)