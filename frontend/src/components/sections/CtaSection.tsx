import { ArrowRight } from 'lucide-react'
import { useI18n } from '../../i18n/I18nContext'
import { ActionLink } from '../ui/ActionLink'

type CtaSectionProps = {
  eyebrow?: string
  title?: string
  text?: string
}

export function CtaSection({
  eyebrow,
  title,
  text,
}: CtaSectionProps) {
  const { t } = useI18n()
  const sectionEyebrow = eyebrow || t.cta.eyebrow
  const sectionTitle = title || t.cta.title
  const sectionText = text || t.cta.text

  return (
    <section className="cta-section">
      <div>
        <p className="eyebrow">{sectionEyebrow}</p>
        <h2>{sectionTitle}</h2>
        <p>{sectionText}</p>
      </div>
      <ActionLink to="/orcamento">
        {t.common.requestQuote}
        <ArrowRight aria-hidden="true" size={18} />
      </ActionLink>
    </section>
  )
}
