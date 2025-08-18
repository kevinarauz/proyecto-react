import { useNavigate } from 'shared/lib'
import { PATHS } from 'shared/config'
import { Loading } from 'shared/ui'
import { useAuth } from './auth'
import type { ReactNode } from 'react'
import { useEffect } from 'shared/lib'

interface ProtectedRouteProps {
  children: ReactNode
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate(PATHS.LOGIN, { replace: true })
    }
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen flex align-items-center justify-content-center">
        <Loading size="large" message="Verificando autenticación..." />
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}

export default ProtectedRoute