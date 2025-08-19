import { Card } from 'shared/lib'
import { useAuth } from 'app/providers'

function HomePage() {
  const { user } = useAuth()
  
  const currentHour = new Date().getHours()
  const getGreeting = () => {
    if (currentHour < 12) return 'Buenos días'
    if (currentHour < 18) return 'Buenas tardes'
    return 'Buenas noches'
  }

  const features = [
    {
      icon: 'pi pi-shield',
      title: 'Autenticación Segura',
      description: 'Sistema de login con persistencia en localStorage',
      color: 'text-blue-500'
    },
    {
      icon: 'pi pi-sitemap',
      title: 'Arquitectura FSD',
      description: 'Feature-Sliced Design para escalabilidad',
      color: 'text-green-500'
    },
    {
      icon: 'pi pi-mobile',
      title: 'Diseño Responsive',
      description: 'Interfaz adaptable con PrimeReact y PrimeFlex',
      color: 'text-purple-500'
    },
    {
      icon: 'pi pi-code',
      title: 'TypeScript',
      description: 'Desarrollo type-safe con IntelliSense completo',
      color: 'text-orange-500'
    }
  ]

  return (
    <div className="grid">
      <div className="col-12">
        <Card className="m-2 text-center">
          <div className="mb-4">
            <i className="pi pi-user-plus text-6xl text-blue-500 mb-3"></i>
            <h1 className="text-4xl font-bold text-900 mb-2">
              {getGreeting()}, {user?.name}! 👋
            </h1>
            <p className="text-xl text-600 mb-4">
              Bienvenido a tu aplicación React con Feature-Sliced Design
            </p>
            <div className="bg-blue-50 border-1 border-blue-200 border-round p-3 mb-4">
              <p className="text-blue-900 m-0">
                <i className="pi pi-info-circle mr-2"></i>
                Has iniciado sesión correctamente como <strong>{user?.role}</strong>
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="col-12">
        <Card title="🚀 Funcionalidades del Proyecto" className="m-2">
          <div className="grid">
            {features.map((feature, index) => (
              <div key={index} className="col-12 md:col-6 lg:col-3">
                <div className="border-1 border-200 border-round p-4 h-full hover:shadow-2 transition-all transition-duration-200">
                  <div className="text-center mb-3">
                    <i className={`${feature.icon} text-4xl ${feature.color}`}></i>
                  </div>
                  <h4 className="text-900 font-semibold mb-2">{feature.title}</h4>
                  <p className="text-600 text-sm line-height-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="col-12">
        <Card title="🧭 Navegación" className="m-2">
          <div className="flex flex-column md:flex-row align-items-center justify-content-between gap-3">
            <div>
              <p className="text-600 mb-2">
                Explora las diferentes secciones de la aplicación:
              </p>
              <ul className="text-600 pl-3">
                <li className="mb-1">📄 <strong>Acerca de:</strong> Información sobre las tecnologías</li>
                <li className="mb-1">📞 <strong>Contacto:</strong> Formulario de contacto funcional</li>
                <li>🚪 <strong>Logout:</strong> Cierra sesión de forma segura</li>
              </ul>
            </div>
            <div className="text-center">
              <i className="pi pi-heart-fill text-red-500 text-2xl"></i>
              <p className="text-sm text-500 mt-2">
                Construido con React + TypeScript
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default HomePage