import { useState } from 'shared/lib'
import { validateCredentials, mockUser } from 'entities/user'
import type { LoginCredentials, User } from 'entities/user'

interface UseLoginReturn {
  credentials: LoginCredentials
  isLoading: boolean
  error: string | null
  updateCredentials: (field: keyof LoginCredentials, value: string) => void
  handleLogin: (e: React.FormEvent) => Promise<void>
  clearError: () => void
}

export function useLogin(onSuccess?: (user: User) => void): UseLoginReturn {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: '',
    password: ''
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateCredentials = (field: keyof LoginCredentials, value: string) => {
    setCredentials(prev => ({
      ...prev,
      [field]: value
    }))
    // Limpiar error al escribir
    if (error) setError(null)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const isValid = validateCredentials(credentials.username, credentials.password)
      
      if (isValid) {
        onSuccess?.(mockUser)
      } else {
        setError('Usuario o contraseña incorrectos')
      }
    } catch (err) {
      setError('Error de conexión. Intenta nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const clearError = () => setError(null)

  return {
    credentials,
    isLoading,
    error,
    updateCredentials,
    handleLogin,
    clearError
  }
}