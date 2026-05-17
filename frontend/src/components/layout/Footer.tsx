import { Gauge } from 'lucide-react'
import { useI18n } from '../../i18n/I18nContext'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer>
      <div>
        <strong>{t.brand}</strong>
        <span>{t.footer.description}</span>
      </div>
      <span className="footer-badge">
        <Gauge aria-hidden="true" size={17} />
        {t.footer.badge}
      </span>
    </footer>
  )
}
