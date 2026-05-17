import { useSiteContent } from '../../hooks/useSiteContent'
import { useI18n } from '../../i18n/I18nContext'
import { BenefitCard } from '../cards/BenefitCard'
import { SectionHeading } from './SectionHeading'

export function QualitySection() {
  const { t } = useI18n()
  const { qualityPoints } = useSiteContent()

  return (
    <section className="section quality-section">
      <SectionHeading
        eyebrow={t.quality.eyebrow}
        title={t.quality.title}
        description={t.quality.description}
      />

      <div className="benefit-grid">
        {qualityPoints.map((point) => (
          <BenefitCard benefit={point} key={point.title} />
        ))}
      </div>
    </section>
  )
}
