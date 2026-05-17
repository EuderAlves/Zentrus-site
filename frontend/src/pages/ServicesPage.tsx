import { CtaSection } from '../components/sections/CtaSection'
import { PageHero } from '../components/sections/PageHero'
import { QualitySection } from '../components/sections/QualitySection'
import { SectionHeading } from '../components/sections/SectionHeading'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { useSiteContent } from '../hooks/useSiteContent'
import { useI18n } from '../i18n/I18nContext'

export function ServicesPage() {
  const { t } = useI18n()
  const { services } = useSiteContent()

  return (
    <main>
      <PageHero
        eyebrow={t.servicesPage.hero.eyebrow}
        title={t.servicesPage.hero.title}
        description={t.servicesPage.hero.description || ''}
      >
        <div className="hero-note">
          <strong>{t.servicesPage.noteTitle}</strong>
          <span>{t.servicesPage.noteText}</span>
        </div>
      </PageHero>

      <section className="section services-section">
        <SectionHeading
          eyebrow={t.servicesPage.section.eyebrow}
          title={t.servicesPage.section.title}
          description={t.servicesPage.section.description}
        />
        <ServicesGrid items={services} />
      </section>

      <QualitySection />
      <CtaSection
        title={t.servicesPage.ctaTitle}
        text={t.servicesPage.ctaText}
      />
    </main>
  )
}
