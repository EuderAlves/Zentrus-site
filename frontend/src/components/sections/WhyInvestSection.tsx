import { benefits } from '../../data/siteContent'
import { BenefitCard } from '../cards/BenefitCard'
import { SectionHeading } from './SectionHeading'

export function WhyInvestSection() {
  return (
    <section className="section why-section">
      <SectionHeading
        eyebrow="Por que investir"
        title="Um bom site trabalha como uma primeira reuniao bem feita."
        description="Ele mostra quem voce e, organiza suas ofertas, antecipa duvidas e facilita o contato de quem ja esta procurando uma solucao."
      />

      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <BenefitCard benefit={benefit} key={benefit.title} />
        ))}
      </div>
    </section>
  )
}
