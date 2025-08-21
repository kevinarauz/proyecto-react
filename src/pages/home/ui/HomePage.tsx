import { Card } from 'shared/lib'
import { useAuth } from 'app/providers'
import { PATHS } from 'shared/config'
import { NavigationCard } from 'widgets/NavigationCard'
import styles from './HomePage.module.css'

function HomePage() {
  const { user } = useAuth()
  
  const currentHour = new Date().getHours()
  const getGreeting = () => {
    if (currentHour < 12) return 'Buenos días'
    if (currentHour < 18) return 'Buenas tardes'
    return 'Buenas noches'
  }

  const navigationCards = [
    {
      id: 'posts',
      title: 'Gestión de Posts',
      description: 'CRUD completo con DataTable avanzado',
      icon: 'pi pi-file-edit',
      path: PATHS.POSTS,
      color: 'blue',
      stats: '100+ posts disponibles',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'about',
      title: 'Acerca del Proyecto',
      description: 'Tecnologías y arquitectura utilizada',
      icon: 'pi pi-info-circle',
      path: PATHS.ABOUT,
      color: 'green',
      stats: '7 tecnologías principales',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'contact',
      title: 'Formulario de Contacto',
      description: 'Envía mensajes y consultas',
      icon: 'pi pi-send',
      path: PATHS.CONTACT,
      color: 'purple',
      stats: 'Respuesta en 24h',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ]


  return (
    <div className="grid">
      {/* Sección de Bienvenida */}
      <div className="col-12">
        <Card className="m-2 text-center border-none shadow-3">
          <div className="mb-4">
            <div className={`border-circle w-6rem h-6rem mx-auto mb-3 flex align-items-center justify-content-center ${styles['welcome-avatar']}`}
                 style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <i className="pi pi-user text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl font-bold text-900 mb-2">
              {getGreeting()}, {user?.name}!
            </h1>
            <p className="text-xl text-600 mb-4">
              Bienvenido a tu aplicación React con Feature-Sliced Design
            </p>
            <div className="bg-blue-50 border-1 border-blue-200 border-round p-3 mb-0 inline-block">
              <p className="text-blue-900 m-0 font-semibold">
                <i className="pi pi-check-circle mr-2"></i>
                Sesión activa como <strong>{user?.role}</strong>
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Cards de Navegación Principal */}
      <div className="col-12">
        <div className="m-2">
          <h2 className="text-2xl font-bold text-900 mb-3 ml-3">
            <i className="pi pi-compass mr-2 text-blue-500"></i>
            Acceso Rápido
          </h2>
          <div className="grid">
            {navigationCards.map((card) => (
              <div key={card.id} className="col-12 md:col-6 lg:col-4">
                <NavigationCard
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  path={card.path}
                  stats={card.stats}
                  gradient={card.gradient}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Información del Proyecto */}
      <div className="col-12">
        <Card title="Información del Proyecto" className="m-2 border-none shadow-2">
          <div className="grid">
            <div className="col-12 md:col-6">
              <div className="flex align-items-start gap-3 mb-4">
                <div className="border-circle w-3rem h-3rem bg-blue-100 flex align-items-center justify-content-center">
                  <i className="pi pi-sitemap text-blue-600"></i>
                </div>
                <div>
                  <h4 className="text-900 font-semibold mb-1">Arquitectura FSD</h4>
                  <p className="text-600 text-sm line-height-3 m-0">
                    Feature-Sliced Design para máxima escalabilidad y mantenibilidad
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-12 md:col-6">
              <div className="flex align-items-start gap-3 mb-4">
                <div className="border-circle w-3rem h-3rem bg-green-100 flex align-items-center justify-content-center">
                  <i className="pi pi-shield text-green-600"></i>
                </div>
                <div>
                  <h4 className="text-900 font-semibold mb-1">TypeScript</h4>
                  <p className="text-600 text-sm line-height-3 m-0">
                    Desarrollo type-safe con IntelliSense completo y detección de errores
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-6">
              <div className="flex align-items-start gap-3 mb-4">
                <div className="border-circle w-3rem h-3rem bg-purple-100 flex align-items-center justify-content-center">
                  <i className="pi pi-mobile text-purple-600"></i>
                </div>
                <div>
                  <h4 className="text-900 font-semibold mb-1">Diseño Responsive</h4>
                  <p className="text-600 text-sm line-height-3 m-0">
                    Interfaz adaptable con PrimeReact y PrimeFlex para todos los dispositivos
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-6">
              <div className="flex align-items-start gap-3 mb-4">
                <div className="border-circle w-3rem h-3rem bg-orange-100 flex align-items-center justify-content-center">
                  <i className="pi pi-code text-orange-600"></i>
                </div>
                <div>
                  <h4 className="text-900 font-semibold mb-1">API Integration</h4>
                  <p className="text-600 text-sm line-height-3 m-0">
                    Consumo de APIs RESTful con JSONPlaceholder y manejo de estados
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 pt-4 border-top-1 border-200">
            <i className="pi pi-heart-fill text-red-500 text-xl mr-2"></i>
            <span className="text-600 font-semibold">
              Construido con React 18 + TypeScript + Vite
            </span>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default HomePage