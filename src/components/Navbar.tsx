import { Link, Menubar } from '../lib'

function Navbar() {
  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      template: (item) => (
        <Link to="/" className="p-menuitem-link">
          <span className={item.icon}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      )
    },
    {
      label: 'Acerca de',
      icon: 'pi pi-info-circle',
      template: (item) => (
        <Link to="/about" className="p-menuitem-link">
          <span className={item.icon}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      )
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      template: (item) => (
        <Link to="/contact" className="p-menuitem-link">
          <span className={item.icon}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      )
    }
  ]

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  )
}

export default Navbar