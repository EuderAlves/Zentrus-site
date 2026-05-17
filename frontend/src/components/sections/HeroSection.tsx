import { ArrowRight, BarChart3, CheckCircle2 } from 'lucide-react'
import { useI18n } from '../../i18n/I18nContext'
import { ActionLink } from '../ui/ActionLink'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p className="hero-copy">{t.hero.copy}</p>

        <div className="hero-actions">
          <ActionLink to="/orcamento">
            {t.hero.primaryAction}
            <ArrowRight aria-hidden="true" size={18} />
          </ActionLink>
          <ActionLink className="secondary-action" to="/servicos">
            {t.hero.secondaryAction}
          </ActionLink>
        </div>

        <div className="hero-proof" aria-label={t.hero.proofAria}>
          {t.proofPoints.map((point) => (
            <span key={point}>
              <CheckCircle2 aria-hidden="true" size={18} />
              {point}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-showcase" aria-label={t.hero.showcaseAria}>
        <div className="browser-bar">
          <span></span>
          <span></span>
          <span></span>
          <strong>{t.hero.browserPath}</strong>
        </div>

        <div className="showcase-body">
          <div className="showcase-copy">
            <span className="mini-label">{t.hero.miniLabel}</span>
            <strong>{t.hero.showcaseTitle}</strong>
            <p>{t.hero.showcaseText}</p>
          </div>

          <div className="conversion-panel">
            <div>
              <span>{t.hero.leadsLabel}</span>
              <strong>{t.hero.leadsValue}</strong>
            </div>
            <BarChart3 aria-hidden="true" size={72} />
          </div>

          <div className="showcase-grid">
            {t.hero.showcaseItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
