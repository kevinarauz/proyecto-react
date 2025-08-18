import { Link, Menubar } from 'shared/lib'
import { navigationItems } from 'entities/navigation'

function Navbar() {
  const items = navigationItems.map(item => ({
    label: item.label,
    icon: item.icon,
    template: (menuItem: any) => (
      <Link to={item.path} className="p-menuitem-link">
        <span className={menuItem.icon}></span>
        <span className="p-menuitem-text">{menuItem.label}</span>
      </Link>
    )
  }))

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  )
}

export default Navbar