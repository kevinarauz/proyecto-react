import { Card } from 'shared/lib'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-8">
      <Card className="m-2 bg-blue-50">
        <div className="flex justify-content-between align-items-center flex-wrap">
          <div className="flex flex-column md:flex-row align-items-center gap-3">
            <span className="text-600">
              © {currentYear} React Learning Project
            </span>
            <div className="flex gap-2">
              <span className="text-sm text-500">Construido con</span>
              <i className="pi pi-heart text-red-500"></i>
              <span className="text-sm text-500">usando React + TypeScript</span>
            </div>
          </div>
          
          <div className="flex align-items-center gap-3">
            <span className="text-sm text-600">Feature-Sliced Design</span>
            <i className="pi pi-code text-blue-500"></i>
          </div>
        </div>
        
        <div className="flex justify-content-center mt-3 pt-3 border-top-1 border-200">
          <span className="text-xs text-400">
            Proyecto de aprendizaje - No usar en producción
          </span>
        </div>
      </Card>
    </footer>
  )
}

export default Footer