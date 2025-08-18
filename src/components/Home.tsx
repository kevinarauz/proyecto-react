import { Card } from '../lib'

function Home() {
  return (
    <div className="grid">
      <div className="col-12">
        <Card title="Página de Inicio" className="m-2">
          <p className="text-lg">
            Bienvenido al proyecto de React con Router y PrimeReact!
          </p>
          <p>
            Este es un proyecto de aprendizaje que utiliza tecnologías modernas 
            para crear aplicaciones web profesionales.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Home