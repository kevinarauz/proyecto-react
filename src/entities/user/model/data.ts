import type { User } from './types'

// Usuario mock para desarrollo
export const mockUser: User = {
  id: '1',
  username: 'kevin',
  email: 'kevin@ejemplo.com',
  name: 'Kevin Desarrollador',
  role: 'admin'
}

// Credenciales mock
export const mockCredentials = {
  username: 'kevin',
  password: '12345'
}

export const validateCredentials = (username: string, password: string): boolean => {
  return username === mockCredentials.username && password === mockCredentials.password
}