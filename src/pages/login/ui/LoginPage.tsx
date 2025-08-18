import { useNavigate, useEffect } from 'shared/lib'
import { PATHS } from 'shared/config'
import { LoginForm } from 'features/auth/login'
import { useAuth } from 'app/providers'
import type { User } from 'entities/user'

function LoginPage() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(PATHS.HOME, { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleLoginSuccess = (user: User) => {
    console.log('Login exitoso:', user)
    login(user)
    navigate(PATHS.HOME, { replace: true })
  }

  if (isAuthenticated) {
    return null
  }

  return <LoginForm onSuccess={handleLoginSuccess} />
}

export default LoginPage