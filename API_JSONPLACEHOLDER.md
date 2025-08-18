# 🚀 JSONPlaceholder API - Guía Completa para Testing

## 📋 Descripción General

**JSONPlaceholder** es una API REST gratuita para testing y prototyping que simula un backend con datos falsos. Ideal para desarrollo de aplicaciones React sin necesidad de un backend real.

**Base URL**: `https://jsonplaceholder.typicode.com`

---

## 📊 Recursos Disponibles

### 🗂️ Posts - `/posts`
**Total**: 100 publicaciones

```typescript
interface Post {
  userId: number    // ID del usuario que creó el post
  id: number       // ID único del post
  title: string    // Título del post
  body: string     // Contenido principal del post
}
```

**Ejemplo de respuesta:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

### 👥 Users - `/users`
**Total**: 10 usuarios

```typescript
interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
```

**Ejemplo de respuesta:**
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

### 💬 Comments - `/comments`
**Total**: 500 comentarios

```typescript
interface Comment {
  postId: number   // ID del post al que pertenece
  id: number       // ID único del comentario
  name: string     // Título o descripción breve del comentario
  email: string    // Email del comentarista
  body: string     // Contenido del comentario
}
```

**Ejemplo de respuesta:**
```json
{
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
}
```

### 📸 Photos - `/photos`
**Total**: 5000 fotos

```typescript
interface Photo {
  albumId: number      // ID del álbum al que pertenece
  id: number          // ID único de la foto
  title: string       // Título de la foto
  url: string         // URL de la imagen completa
  thumbnailUrl: string // URL del thumbnail
}
```

**Ejemplo de respuesta:**
```json
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}
```

### 📚 Albums - `/albums`
**Total**: 100 álbumes

```typescript
interface Album {
  userId: number   // ID del usuario propietario
  id: number       // ID único del álbum
  title: string    // Título del álbum
}
```

**Ejemplo de respuesta:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "quidem molestiae enim"
}
```

### ✅ Todos - `/todos`
**Total**: 200 tareas

```typescript
interface Todo {
  userId: number    // ID del usuario
  id: number        // ID único de la tarea
  title: string     // Descripción de la tarea
  completed: boolean // Estado de completado
}
```

**Ejemplo de respuesta:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

---

## 🔧 Operaciones HTTP Soportadas

### GET - Obtener datos

```typescript
// Obtener todos los posts
fetch('https://jsonplaceholder.typicode.com/posts')

// Obtener un post específico
fetch('https://jsonplaceholder.typicode.com/posts/1')

// Obtener comentarios de un post
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

// Obtener posts de un usuario
fetch('https://jsonplaceholder.typicode.com/users/1/posts')

// Filtrar con query params
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
```

### POST - Crear nuevos recursos

```typescript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Mi nuevo post',
    body: 'Contenido del post',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
```

### PUT - Actualizar recurso completo

```typescript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'Post actualizado',
    body: 'Nuevo contenido',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
```

### PATCH - Actualizar parcialmente

```typescript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'Solo actualizo el título',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
```

### DELETE - Eliminar recurso

```typescript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
```

---

## 🔗 Relaciones Entre Recursos

### Posts y Usuarios
- Cada post tiene un `userId`
- Un usuario puede tener múltiples posts
- 10 posts por usuario (100 total)

### Posts y Comments
- Cada comentario tiene un `postId`
- Un post puede tener múltiples comentarios
- ~5 comentarios por post (500 total)

### Albums y Photos
- Cada foto tiene un `albumId`
- Un álbum puede tener múltiples fotos
- 50 fotos por álbum (5000 total)

### Users y Todos
- Cada todo tiene un `userId`
- Un usuario puede tener múltiples todos
- 20 todos por usuario (200 total)

---

## 🚀 Endpoints Útiles para Testing

### Obtener datos relacionados

```typescript
// Posts de un usuario específico
/users/1/posts

// Comentarios de un post específico
/posts/1/comments

// Fotos de un álbum específico
/albums/1/photos

// Todos de un usuario específico
/users/1/todos

// Albums de un usuario específico
/users/1/albums
```

### Filtrado con Query Parameters

```typescript
// Filtrar posts por usuario
/posts?userId=1

// Filtrar comentarios por post
/comments?postId=1

// Filtrar todos completados
/todos?completed=true

// Múltiples filtros
/todos?userId=1&completed=false
```

---

## 💡 Casos de Uso para Testing

### 1. **Dashboard de Posts**
- Listar posts con información del autor
- Mostrar comentarios por post
- Paginación y filtros

### 2. **Gestión de Tareas (Todos)**
- Lista de tareas pendientes/completadas
- Filtrar por usuario
- Marcar como completado

### 3. **Galería de Fotos**
- Mostrar álbumes por usuario
- Vista de thumbnails
- Modal con imagen completa

### 4. **Perfil de Usuario**
- Información completa del usuario
- Posts, álbumes y tareas del usuario
- Mapa con geolocalización

### 5. **Sistema de Comentarios**
- Comentarios por post
- Validación de email
- Respuestas anidadas (simuladas)

---

## ⚠️ Limitaciones Importantes

1. **Solo simulación**: Los POST, PUT, PATCH, DELETE no persisten datos realmente
2. **CORS habilitado**: Funciona desde cualquier origen
3. **Sin autenticación**: No requiere tokens ni headers especiales
4. **Datos fijos**: Siempre devuelve los mismos 100 posts, 10 usuarios, etc.
5. **Sin paginación real**: Todos los datos se devuelven de una vez

---

## 🛠️ Implementación en React

### Servicio Base

```typescript
// shared/api/jsonplaceholder.ts
const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const jsonPlaceholderApi = {
  // Posts
  posts: {
    getAll: () => fetch(`${BASE_URL}/posts`).then(res => res.json()),
    getById: (id: number) => fetch(`${BASE_URL}/posts/${id}`).then(res => res.json()),
    getByUserId: (userId: number) => fetch(`${BASE_URL}/posts?userId=${userId}`).then(res => res.json()),
    create: (post: Omit<Post, 'id'>) => 
      fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      }).then(res => res.json()),
  },
  
  // Users
  users: {
    getAll: () => fetch(`${BASE_URL}/users`).then(res => res.json()),
    getById: (id: number) => fetch(`${BASE_URL}/users/${id}`).then(res => res.json()),
  },
  
  // Comments
  comments: {
    getByPostId: (postId: number) => fetch(`${BASE_URL}/posts/${postId}/comments`).then(res => res.json()),
  }
}
```

### Hook Personalizado

```typescript
// shared/hooks/useJsonPlaceholder.ts
import { useState, useEffect } from 'react'

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    jsonPlaceholderApi.posts.getAll()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading }
}
```

---

Esta API es perfecta para desarrollar y probar funcionalidades sin depender de un backend real. ¡Ideal para demos, prototipos y aprendizaje! 🚀