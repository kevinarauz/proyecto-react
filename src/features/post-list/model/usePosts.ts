import { useState, useEffect } from 'shared/lib'
import { postApi } from 'entities/post'
import type { Post } from 'entities/post'

interface UsePostsReturn {
  posts: Post[]
  isLoading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function usePosts(): UsePostsReturn {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await postApi.getAllPosts()
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return {
    posts,
    isLoading,
    error,
    refetch: fetchPosts
  }
}