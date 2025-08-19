import type { Post, CreatePostDto, UpdatePostDto } from '../model/types'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const postApi = {
  // Obtener todos los posts
  getAllPosts: async (): Promise<Post[]> => {
    const response = await fetch(`${BASE_URL}/posts`)
    if (!response.ok) {
      throw new Error('Error al cargar los posts')
    }
    return response.json()
  },

  // Obtener un post por ID
  getPostById: async (id: number): Promise<Post> => {
    const response = await fetch(`${BASE_URL}/posts/${id}`)
    if (!response.ok) {
      throw new Error(`Error al cargar el post ${id}`)
    }
    return response.json()
  },

  // Crear un nuevo post
  createPost: async (postData: CreatePostDto): Promise<Post> => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error('Error al crear el post')
    }
    return response.json()
  },

  // Actualizar un post
  updatePost: async (postData: UpdatePostDto): Promise<Post> => {
    const response = await fetch(`${BASE_URL}/posts/${postData.id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error('Error al actualizar el post')
    }
    return response.json()
  },

  // Eliminar un post
  deletePost: async (id: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error('Error al eliminar el post')
    }
  }
}