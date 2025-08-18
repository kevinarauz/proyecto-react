# React Router - Guía de Implementación

## ¿Qué es React Router?

React Router es una biblioteca de enrutamiento para aplicaciones React que permite crear aplicaciones de una sola página (SPA) con navegación entre diferentes vistas/componentes sin recargar la página.

## Instalación

```bash
npm install react-router-dom
```

## Conceptos principales

### 1. BrowserRouter
Proporciona el contexto de enrutamiento para toda la aplicación.

```jsx
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* Tu aplicación aquí */}
    </Router>
  )
}
```

### 2. Routes y Route
Define las rutas de la aplicación y qué componente renderizar para cada una.

```jsx
import { Routes, Route } from 'react-router-dom'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

### 3. Link
Permite navegar entre rutas sin recargar la página.

```jsx
import { Link } from 'react-router-dom'

<Link to="/about">Ir a Acerca de</Link>
```

## Implementación en este proyecto

### Estructura de archivos
```
src/
├── components/
│   ├── Home.tsx      → Página de inicio (/)
│   ├── About.tsx     → Página acerca de (/about)
│   ├── Contact.tsx   → Página de contacto (/contact)
│   └── Navbar.tsx    → Barra de navegación
└── App.tsx          → Router principal
```

### Configuración principal (App.tsx)
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
```

### Navegación (Navbar.tsx)
```jsx
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  )
}
```

## Características del enrutamiento SPA

✅ **Navegación sin recargas**: Los cambios de ruta no refrescan el navegador  
✅ **Historia del navegador**: Funciona con botones atrás/adelante  
✅ **URLs amigables**: `/about`, `/contact` en lugar de `#about`  
✅ **Experiencia fluida**: Transiciones rápidas entre páginas  

## Rutas disponibles en el proyecto

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | Home | Página de inicio |
| `/about` | About | Información del proyecto |
| `/contact` | Contact | Formulario de contacto |

## Próximos pasos

Funcionalidades que se pueden agregar:
- Rutas con parámetros (`/user/:id`)
- Página 404 (Not Found)
- Rutas protegidas
- Lazy loading de componentes
- Rutas anidadas