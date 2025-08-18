import { Card, Chip } from '../lib'

function About() {
  const technologies = [
    'React 18',
    'TypeScript', 
    'Vite',
    'React Router',
    'PrimeReact',
    'PrimeFlex',
    'ESLint'
  ]

  return (
    <div className="grid">
      <div className="col-12">
        <Card title="Acerca de" className="m-2">
          <p className="text-lg mb-4">
            Este es un proyecto de aprendizaje de React con TypeScript y Vite.
          </p>
          
          <h3>Tecnologías utilizadas:</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Chip 
                key={index} 
                label={tech} 
                icon="pi pi-cog"
                className="mr-1 mb-1"
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default About