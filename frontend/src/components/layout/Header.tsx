import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/siteContent'

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Zentrus Tecnologia">
        <span className="brand-mark">Z</span>
        <span>Zentrus Tecnologia</span>
      </Link>

      <nav aria-label="Navegacao principal">
        {navigationItems.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            key={item.path}
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
