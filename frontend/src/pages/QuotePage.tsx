import { FaqSection } from '../components/sections/FaqSection'
import { PageHero } from '../components/sections/PageHero'
import { QuoteRequestSection } from '../components/sections/QuoteRequestSection'
import { useI18n } from '../i18n/I18nContext'

export function QuotePage() {
  const { t } = useI18n()

  return (
    <main>
      <PageHero
        eyebrow={t.quotePage.hero.eyebrow}
        title={t.quotePage.hero.title}
        description={t.quotePage.hero.description || ''}
      >
        <div className="hero-note">
          <strong>{t.quotePage.noteTitle}</strong>
          <span>{t.quotePage.noteText}</span>
        </div>
      </PageHero>

      <QuoteRequestSection />
      <FaqSection />
    </main>
  )
}
