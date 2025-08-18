import { createContext, useContext, useState, useEffect } from 'shared/lib'
import type { ReactNode } from 'react'
import type { User, AuthState } from 'entities/user'

interface AuthContextType extends AuthState {
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  })

  useEffect(() => {
    // Verificar si hay usuario guardado en localStorage
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false
        })
      } catch {
        localStorage.removeItem('user')
        setAuthState(prev => ({ ...prev, isLoading: false }))
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }))
    }
  }, [])

  const login = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
    setAuthState({
      user,
      isAuthenticated: true,
      isLoading: false
    })
  }

  const logout = () => {
    localStorage.removeItem('user')
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    })
  }

  const value: AuthContextType = {
    ...authState,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}