import { Card, Button, useState } from 'shared/lib'
import { Loading } from 'shared/ui'

function HomePage() {
  const [isLoading, setIsLoading] = useState(false)

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="grid">
      <div className="col-12">
        <Card title="Página de Inicio" className="m-2">
          <p className="text-lg">
            Bienvenido al proyecto de React con Router y PrimeReact!
          </p>
          <p className="mb-4">
            Este es un proyecto de aprendizaje que utiliza tecnologías modernas 
            para crear aplicaciones web profesionales con arquitectura Feature-Sliced Design.
          </p>
          
          <div className="mb-4">
            <h4>Demostración del componente Loading</h4>
            <Button 
              label="Simular carga"
              icon="pi pi-refresh"
              onClick={simulateLoading}
              disabled={isLoading}
              className="mr-2 mb-2"
            />
          </div>

          {isLoading && (
            <div className="border-1 border-200 border-round p-4 mb-4">
              <Loading 
                size="medium" 
                message="Cargando datos..."
              />
            </div>
          )}

          <div className="grid mt-4">
            <div className="col-12 md:col-4">
              <Card title="Loading pequeño" className="h-full">
                <Loading size="small" message="Pequeño" />
              </Card>
            </div>
            <div className="col-12 md:col-4">
              <Card title="Loading mediano" className="h-full">
                <Loading size="medium" message="Mediano" />
              </Card>
            </div>
            <div className="col-12 md:col-4">
              <Card title="Loading grande" className="h-full">
                <Loading size="large" message="Grande" />
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default HomePage