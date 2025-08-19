import { useState, useEffect } from 'shared/lib'
import { postApi } from 'entities/post'
import type { Post, UpdatePostDto } from 'entities/post'

interface UseEditPostReturn {
  formData: UpdatePostDto | null
  isLoading: boolean
  isUpdating: boolean
  error: string | null
  updateField: (field: keyof UpdatePostDto, value: string | number) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
}

export function useEditPost(postId: number, onSuccess?: (post: Post) => void): UseEditPostReturn {
  const [formData, setFormData] = useState<UpdatePostDto | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Cargar datos del post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const post = await postApi.getPostById(postId)
        setFormData({
          id: post.id,
          title: post.title,
          body: post.body,
          userId: post.userId
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar el post')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [postId])

  const updateField = (field: keyof UpdatePostDto, value: string | number) => {
    if (!formData) return
    
    setFormData(prev => prev ? ({
      ...prev,
      [field]: value
    }) : null)
    
    // Limpiar error al escribir
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) return

    setIsUpdating(true)
    setError(null)

    try {
      const updatedPost = await postApi.updatePost(formData)
      onSuccess?.(updatedPost)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar el post')
    } finally {
      setIsUpdating(false)
    }
  }

  return {
    formData,
    isLoading,
    isUpdating,
    error,
    updateField,
    handleSubmit
  }
}