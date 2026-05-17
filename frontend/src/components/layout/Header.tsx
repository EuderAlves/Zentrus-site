import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/siteContent'
import { useI18n } from '../../i18n/I18nContext'
import { LanguageSelector } from './LanguageSelector'

export function Header() {
  const { t } = useI18n()

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label={t.brand}>
        <span className="brand-mark">Z</span>
        <span>{t.brand}</span>
      </Link>

      <div className="header-actions">
        <nav aria-label={t.brand}>
          {navigationItems.map((item) => (
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              key={item.path}
              to={item.path}
            >
              {t.navigation[item.key]}
            </NavLink>
          ))}
        </nav>
        <LanguageSelector />
      </div>
    </header>
  )
}
