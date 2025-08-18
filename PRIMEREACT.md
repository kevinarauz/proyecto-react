# PrimeReact + PrimeFlex - Guía de Implementación

## ¿Qué es PrimeReact?

PrimeReact es una biblioteca de componentes UI rica y completa para React, similar a ngPrime que ya conoces de Angular. Ofrece más de 90 componentes listos para usar con temas profesionales.

## ¿Qué es PrimeFlex?

PrimeFlex es un sistema de CSS utilities basado en Flexbox y CSS Grid, similar a Bootstrap. Perfecto para layouts responsive y rápidos.

## Instalación

```bash
npm install primereact primeicons primeflex
```

## Configuración CSS

En tu archivo `src/index.css`:

```css
/* PrimeReact Theme */
@import 'primereact/resources/themes/lara-light-cyan/theme.css';

/* PrimeReact Core CSS */
@import 'primereact/resources/primereact.min.css';

/* PrimeIcons */
@import 'primeicons/primeicons.css';

/* PrimeFlex CSS Utilities */
@import 'primeflex/primeflex.css';
```

## Importaciones Centralizadas

Para facilitar la reutilización en otros proyectos, se creó un archivo de importaciones centralizadas en `src/lib/index.ts`:

```jsx
// En lugar de múltiples imports
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

// Usa un solo import
import { Card, Button, InputText } from '../lib'
```

### Ventajas:
- **Reutilización**: Copia solo la carpeta `lib/` a otro proyecto
- **Mantenimiento**: Cambios centralizados de versiones
- **Limpieza**: Imports más concisos
- **TypeScript**: Tipos incluidos automáticamente

## Componentes PrimeReact implementados

### 1. Menubar (Navbar)
```jsx
import { Menubar, MenuItem } from '../lib'

const items: MenuItem[] = [
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    template: (item) => (
      <Link to="/" className="p-menuitem-link">
        <span className={item.icon}></span>
        <span className="p-menuitem-text">{item.label}</span>
      </Link>
    )
  }
]

<Menubar model={items} />
```

### 2. Card
```jsx
import { Card } from '../lib'

<Card title="Mi Título" className="m-2">
  <p>Contenido de la tarjeta</p>
</Card>
```

### 3. Chip (Etiquetas)
```jsx
import { Chip } from '../lib'

<Chip 
  label="React 18" 
  icon="pi pi-cog"
  className="mr-1 mb-1"
/>
```

### 4. Formularios con InputText y FloatLabel
```jsx
import { useState, InputText, InputTextarea, FloatLabel, Button } from '../lib'

<FloatLabel className="w-full mb-4">
  <InputText 
    id="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full"
  />
  <label htmlFor="name">Nombre</label>
</FloatLabel>

<Button 
  type="submit"
  label="Enviar"
  icon="pi pi-send"
  className="p-button-primary"
/>
```

## PrimeFlex - Sistema de Grid

### Grid System (similar a Bootstrap)
```jsx
// Grid de 12 columnas
<div className="grid">
  <div className="col-12 md:col-6 lg:col-4">
    Contenido
  </div>
</div>

// Responsive breakpoints
<div className="col-12 md:col-8 md:col-offset-2">
  Centrado en desktop
</div>
```

### Flexbox Utilities
```jsx
// Flex containers
<div className="flex">
  <div className="flex-1">Elemento que crece</div>
  <div className="flex-none">Elemento fijo</div>
</div>

// Alineación
<div className="flex align-items-center justify-content-center">
  Centrado vertical y horizontal
</div>

// Direction
<div className="flex flex-column">
  Elementos en columna
</div>
```

### Spacing (similar a Bootstrap)
```jsx
// Padding y margin
<div className="p-2">      {/* padding: 0.5rem */}
<div className="m-4">      {/* margin: 1rem */}
<div className="px-3">     {/* padding left/right: 0.75rem */}
<div className="my-2">     {/* margin top/bottom: 0.5rem */}

// Tamaños: 0, 1, 2, 3, 4, 5, 6, 7, 8
```

### Responsive Design
```jsx
// Breakpoints: sm, md, lg, xl
<div className="col-12 md:col-6 lg:col-3">
  4 columnas en pantallas grandes
  2 columnas en tablets
  1 columna en móviles
</div>
```

## Ventajas de PrimeReact + PrimeFlex

### ✅ **Para ti (viniendo de Angular/ngPrime):**
- **Conocimiento reutilizable**: Mismos componentes que ngPrime
- **API familiar**: `<Button>`, `<Card>`, `<InputText>` igual que ngPrime
- **Transición suave**: Solo cambias la sintaxis de Angular a React

### ✅ **Características generales:**
- **90+ componentes**: Todo lo que necesitas incluido
- **Temas profesionales**: Lara, Material, Bootstrap, etc.
- **Responsive**: Grid system como Bootstrap
- **TypeScript**: Soporte nativo completo
- **Accesibilidad**: Componentes accesibles por defecto

## Comparación con ngPrime

| Concepto | Angular (ngPrime) | React (PrimeReact) |
|----------|-------------------|-------------------|
| **Botón** | `<p-button label="Click">` | `<Button label="Click">` |
| **Tabla** | `<p-dataTable [value]="data">` | `<DataTable value={data}>` |
| **Input** | `<p-inputText [(ngModel)]="value">` | `<InputText value={value} onChange={...}>` |
| **Card** | `<p-card header="Title">` | `<Card title="Title">` |

## Temas disponibles

```css
/* Temas populares */
'primereact/resources/themes/lara-light-cyan/theme.css'     /* Moderno (default) */
'primereact/resources/themes/bootstrap4-light-blue/theme.css'  /* Bootstrap */
'primereact/resources/themes/md-light-indigo/theme.css'       /* Material Design */
'primereact/resources/themes/saga-blue/theme.css'            /* Clásico */
```

## Próximos componentes a explorar

- **DataTable**: Tablas con paginación, filtros, sort
- **Calendar**: Selector de fechas
- **Dialog**: Modales y popups
- **Chart**: Gráficos y visualizaciones
- **FileUpload**: Subida de archivos
- **Tree**: Estructuras jerárquicas

## Recursos útiles

- [Documentación PrimeReact](https://primereact.org/)
- [PrimeFlex Documentation](https://primeflex.org/)
- [PrimeIcons](https://primereact.org/icons/)
- [Tema Designer](https://designer.primereact.org/) - Personaliza temas