import { useState } from 'shared/lib'
import { postApi } from 'entities/post'

interface UseDeletePostReturn {
  isDeleting: boolean
  error: string | null
  deletePost: (postId: number) => Promise<boolean>
  clearError: () => void
}

export function useDeletePost(onSuccess?: (postId: number) => void): UseDeletePostReturn {
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const deletePost = async (postId: number): Promise<boolean> => {
    setIsDeleting(true)
    setError(null)

    try {
      await postApi.deletePost(postId)
      onSuccess?.(postId)
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar el post')
      return false
    } finally {
      setIsDeleting(false)
    }
  }

  const clearError = () => setError(null)

  return {
    isDeleting,
    error,
    deletePost,
    clearError
  }
}