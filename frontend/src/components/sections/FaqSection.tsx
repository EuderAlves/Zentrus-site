import { faqs } from '../../data/siteContent'
import { FaqCard } from '../cards/FaqCard'
import { SectionHeading } from './SectionHeading'

export function FaqSection() {
  return (
    <section className="section faq-section">
      <SectionHeading
        eyebrow="Duvidas comuns"
        title="Perguntas que geralmente aparecem antes do orcamento."
      />

      <div className="faq-grid">
        {faqs.map((faq) => (
          <FaqCard faq={faq} key={faq.question} />
        ))}
      </div>
    </section>
  )
}
