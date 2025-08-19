import { useState } from 'shared/lib'
import { postApi } from 'entities/post'
import type { CreatePostDto, Post } from 'entities/post'

interface UseCreatePostReturn {
  formData: CreatePostDto
  isLoading: boolean
  error: string | null
  updateField: (field: keyof CreatePostDto, value: string | number) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

export function useCreatePost(onSuccess?: (post: Post) => void): UseCreatePostReturn {
  const [formData, setFormData] = useState<CreatePostDto>({
    title: '',
    body: '',
    userId: 1 // Por defecto usuario 1
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = (field: keyof CreatePostDto, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Limpiar error al escribir
    if (error) setError(null)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      body: '',
      userId: 1
    })
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const newPost = await postApi.createPost(formData)
      onSuccess?.(newPost)
      resetForm()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear el post')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    formData,
    isLoading,
    error,
    updateField,
    handleSubmit,
    resetForm
  }
}