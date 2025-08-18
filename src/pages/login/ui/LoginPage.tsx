import { useNavigate } from 'shared/lib'
import { PATHS } from 'shared/config'
import { LoginForm } from 'features/auth/login'
import type { User } from 'entities/user'

function LoginPage() {
  const navigate = useNavigate()

  const handleLoginSuccess = (user: User) => {
    console.log('Login exitoso:', user)
    // Aquí se guardaría el usuario en el estado global
    navigate(PATHS.HOME)
  }

  return <LoginForm onSuccess={handleLoginSuccess} />
}

export default LoginPage