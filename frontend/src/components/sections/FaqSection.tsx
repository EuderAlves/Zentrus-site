import { useSiteContent } from '../../hooks/useSiteContent'
import { useI18n } from '../../i18n/I18nContext'
import { FaqCard } from '../cards/FaqCard'
import { SectionHeading } from './SectionHeading'

export function FaqSection() {
  const { t } = useI18n()
  const { faqs } = useSiteContent()

  return (
    <section className="section faq-section">
      <SectionHeading
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
      />

      <div className="faq-grid">
        {faqs.map((faq) => (
          <FaqCard faq={faq} key={faq.question} />
        ))}
      </div>
    </section>
  )
}
