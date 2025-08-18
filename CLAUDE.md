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
│   └── login/            # Página de login
├── widgets/               # 🧩 Componentes complejos reutilizables
│   ├── Navbar/           # Barra de navegación con auth
│   └── Footer/           # Pie de página
├── features/              # ⚡ Funcionalidades específicas
│   ├── auth/login/       # Sistema de autenticación
│   └── contact/send-message/  # Feature de formulario de contacto
├── entities/              # 🏗️ Modelos de negocio
│   ├── user/             # Entidad usuario con auth
│   └── navigation/       # Entidad de navegación
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
- `features/auth/login` → `src/features/auth/login`
- `features/contact/send-message` → `src/features/contact/send-message`
- `widgets/Navbar` → `src/widgets/Navbar`
- `widgets/Footer` → `src/widgets/Footer`
- `pages/home` → `src/pages/home`
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

### 🎨 Componentes UI
- **Loading**: Componente con 3 tamaños y spinner SVG animado
- **Spinner**: SVG independiente con animaciones CSS
- **Footer**: Información del proyecto y tecnologías
- **Navbar**: Navegación con estado de autenticación y logout

### 🛣️ Navegación
- **Ruta por defecto**: `/` redirige a `/login`
- **Rutas públicas**: `/login`
- **Rutas protegidas**: `/home`, `/about`, `/contact`
- **ProtectedRoute**: Componente que verifica autenticación

## Flujo de la aplicación

1. **Inicio**: App carga en `/login`
2. **Autenticación**: Login con credenciales mock
3. **Navegación**: Acceso a páginas protegidas tras login
4. **Persistencia**: Sesión se mantiene al refrescar
5. **Logout**: Regresa al login y limpia sesión

## Notas importantes

- **Versiones compatibles**: Las dependencias están configuradas para Node.js v18
- **FSD Template**: Este proyecto sirve como template para futuros proyectos escalables
- **TypeScript**: Path mappings configurados para IntelliSense completo
- **Credenciales mock**: Solo para desarrollo - cambiar en producción
- **localStorage**: Persistencia básica - considerar tokens JWT en producción