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
│   └── providers/         # Router, providers globales
├── pages/                 # 📄 Páginas por ruta
│   ├── home/             # Página de inicio
│   ├── about/            # Página acerca de  
│   └── contact/          # Página de contacto
├── widgets/               # 🧩 Componentes complejos reutilizables
│   └── Navbar/           # Barra de navegación
├── features/              # ⚡ Funcionalidades específicas
│   └── contact/send-message/  # Feature de formulario de contacto
├── entities/              # 🏗️ Modelos de negocio
│   └── navigation/       # Entidad de navegación
└── shared/                # 🔧 Código agnóstico reutilizable
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
- `entities/navigation` → `src/entities/navigation`  
- `features/contact/send-message` → `src/features/contact/send-message`
- `widgets/Navbar` → `src/widgets/Navbar`
- `pages/home` → `src/pages/home`

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

## Notas importantes

- **Versiones compatibles**: Las dependencias están configuradas para Node.js v18
- **FSD Template**: Este proyecto sirve como template para futuros proyectos escalables
- **TypeScript**: Path mappings configurados para IntelliSense completo