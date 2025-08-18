export interface User {
  id: string
  username: string
  email: string
  name: string
  role: 'admin' | 'user'
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}