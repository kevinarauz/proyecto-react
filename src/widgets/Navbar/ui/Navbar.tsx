import { Link, Menubar, Button } from 'shared/lib'
import { navigationItems } from 'entities/navigation'
import { useAuth } from 'app/providers'
import { PATHS } from 'shared/config'

function Navbar() {
  const { user, logout } = useAuth()

  const publicItems = navigationItems.filter(item => item.path !== PATHS.LOGIN)
  
  const items = publicItems.map(item => ({
    label: item.label,
    icon: item.icon,
    template: (menuItem: any) => (
      <Link to={item.path} className="p-menuitem-link">
        <span className={`${menuItem.icon} mr-2`}></span>
        <span className="p-menuitem-text">{menuItem.label}</span>
      </Link>
    )
  }))

  const end = (
    <div className="flex align-items-center gap-2">
      {user && (
        <>
          <span className="text-600">
            Hola, <strong>{user.name}</strong>
          </span>
          <Button
            label="Cerrar Sesión"
            icon="pi pi-sign-out"
            text
            onClick={logout}
            className="p-button-sm"
          />
        </>
      )}
    </div>
  )

  return (
    <div className="card">
      <Menubar model={items} end={end} />
    </div>
  )
}

export default Navbar