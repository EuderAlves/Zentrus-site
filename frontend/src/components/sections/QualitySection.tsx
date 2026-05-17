import { qualityPoints } from '../../data/siteContent'
import { BenefitCard } from '../cards/BenefitCard'
import { SectionHeading } from './SectionHeading'

export function QualitySection() {
  return (
    <section className="section quality-section">
      <SectionHeading
        eyebrow="Padrao de entrega"
        title="Mais do que uma pagina bonita: uma base para sua empresa evoluir."
        description="A estrutura do projeto considera performance, organizacao do codigo, manutencao e proximos passos como dominio, hospedagem e integracoes."
      />

      <div className="benefit-grid">
        {qualityPoints.map((point) => (
          <BenefitCard benefit={point} key={point.title} />
        ))}
      </div>
    </section>
  )
}
