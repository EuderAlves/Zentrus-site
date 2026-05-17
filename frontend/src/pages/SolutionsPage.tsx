import { CtaSection } from '../components/sections/CtaSection'
import { PackagesGrid } from '../components/sections/PackagesGrid'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/sections/SectionHeading'
import { useSiteContent } from '../hooks/useSiteContent'
import { useI18n } from '../i18n/I18nContext'

export function SolutionsPage() {
  const { t } = useI18n()
  const { packages } = useSiteContent()

  return (
    <main>
      <PageHero
        eyebrow={t.solutionsPage.hero.eyebrow}
        title={t.solutionsPage.hero.title}
        description={t.solutionsPage.hero.description || ''}
      >
        <ul className="hero-checklist">
          {t.solutionsPage.checklist.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </PageHero>

      <section className="section packages-section">
        <SectionHeading
          eyebrow={t.solutionsPage.section.eyebrow}
          title={t.solutionsPage.section.title}
          description={t.solutionsPage.section.description}
        />
        <PackagesGrid items={packages} />
      </section>

      <section className="section comparison-section">
        <SectionHeading
          eyebrow={t.solutionsPage.comparison.eyebrow}
          title={t.solutionsPage.comparison.title}
        />

        <div className="comparison-grid">
          {t.solutionsPage.comparisonItems.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        title={t.solutionsPage.ctaTitle}
        text={t.solutionsPage.ctaText}
      />
    </main>
  )
}
