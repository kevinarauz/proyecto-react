import { Card, InputText, Button, FloatLabel } from 'shared/lib'
import { Loading } from 'shared/ui'
import { useLogin } from '../model/useLogin'
import type { User } from 'entities/user'

interface LoginFormProps {
  onSuccess?: (user: User) => void
}

function LoginForm({ onSuccess }: LoginFormProps) {
  const { 
    credentials, 
    isLoading, 
    error, 
    updateCredentials, 
    handleLogin 
  } = useLogin(onSuccess)

  return (
    <div className="flex align-items-center justify-content-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md">
        <Card className="p-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold text-900 mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-600">
              Ingresa tus credenciales para acceder
            </p>
          </div>

          {/* Credenciales de prueba */}
          <div className="bg-yellow-50 border-1 border-yellow-200 border-round p-3 mb-4">
            <div className="flex align-items-center gap-2 mb-2">
              <i className="pi pi-info-circle text-yellow-600"></i>
              <span className="text-sm font-semibold text-yellow-900">
                Credenciales de prueba:
              </span>
            </div>
            <div className="text-sm text-yellow-800">
              <div><strong>Usuario:</strong> kevin</div>
              <div><strong>Contraseña:</strong> 12345</div>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="flex flex-column gap-4">
              <FloatLabel>
                <InputText
                  id="username"
                  value={credentials.username}
                  onChange={(e) => updateCredentials('username', e.target.value)}
                  className="w-full"
                  disabled={isLoading}
                />
                <label htmlFor="username">Usuario</label>
              </FloatLabel>

              <FloatLabel>
                <InputText
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => updateCredentials('password', e.target.value)}
                  className="w-full"
                  disabled={isLoading}
                />
                <label htmlFor="password">Contraseña</label>
              </FloatLabel>

              {error && (
                <div className="bg-red-50 border-1 border-red-200 border-round p-3">
                  <div className="flex align-items-center gap-2">
                    <i className="pi pi-exclamation-triangle text-red-600"></i>
                    <span className="text-sm text-red-800">{error}</span>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                label={isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                icon={isLoading ? '' : 'pi pi-sign-in'}
                className="w-full"
                disabled={isLoading || !credentials.username || !credentials.password}
              />

              {isLoading && (
                <div className="flex justify-content-center">
                  <Loading size="small" message="Verificando credenciales..." />
                </div>
              )}
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default LoginForm