import { useSiteContent } from '../../hooks/useSiteContent'
import { useI18n } from '../../i18n/I18nContext'
import { BenefitCard } from '../cards/BenefitCard'
import { SectionHeading } from './SectionHeading'

export function WhyInvestSection() {
  const { t } = useI18n()
  const { benefits } = useSiteContent()

  return (
    <section className="section why-section">
      <SectionHeading
        eyebrow={t.why.eyebrow}
        title={t.why.title}
        description={t.why.description}
      />

      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <BenefitCard benefit={benefit} key={benefit.title} />
        ))}
      </div>
    </section>
  )
}
