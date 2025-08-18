import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#f0f0f0', 
      marginBottom: '2rem',
      borderBottom: '1px solid #ddd'
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '2rem', 
        margin: 0, 
        padding: 0 
      }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: 'none', color: '#007bff' }}>
            Acerca de
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar