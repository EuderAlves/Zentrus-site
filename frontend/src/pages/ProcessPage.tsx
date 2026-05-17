import { CtaSection } from '../components/sections/CtaSection'
import { PageHero } from '../components/sections/PageHero'
import { ProcessGrid } from '../components/sections/ProcessGrid'
import { SectionHeading } from '../components/sections/SectionHeading'
import { useSiteContent } from '../hooks/useSiteContent'
import { useI18n } from '../i18n/I18nContext'

export function ProcessPage() {
  const { t } = useI18n()
  const { processSteps } = useSiteContent()

  return (
    <main>
      <PageHero
        eyebrow={t.processPage.hero.eyebrow}
        title={t.processPage.hero.title}
        description={t.processPage.hero.description || ''}
      >
        <div className="hero-note">
          <strong>{t.processPage.noteTitle}</strong>
          <span>{t.processPage.noteText}</span>
        </div>
      </PageHero>

      <section className="section process-section">
        <SectionHeading
          eyebrow={t.processPage.section.eyebrow}
          title={t.processPage.section.title}
          description={t.processPage.section.description}
          split
        />
        <ProcessGrid items={processSteps} />
      </section>

      <section className="section delivery-section">
        <SectionHeading
          eyebrow={t.processPage.delivery.eyebrow}
          title={t.processPage.delivery.title}
        />

        <div className="delivery-grid">
          {t.processPage.deliveryItems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        title={t.processPage.ctaTitle}
        text={t.processPage.ctaText}
      />
    </main>
  )
}
