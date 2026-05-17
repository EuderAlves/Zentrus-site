import { ArrowRight } from 'lucide-react'
import { packages, processSteps, services } from '../data/siteContent'
import { CtaSection } from '../components/sections/CtaSection'
import { FaqSection } from '../components/sections/FaqSection'
import { HeroSection } from '../components/sections/HeroSection'
import { PackagesGrid } from '../components/sections/PackagesGrid'
import { ProcessGrid } from '../components/sections/ProcessGrid'
import { ResultStrip } from '../components/sections/ResultStrip'
import { SectionHeading } from '../components/sections/SectionHeading'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { WhyInvestSection } from '../components/sections/WhyInvestSection'
import { ActionLink } from '../components/ui/ActionLink'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ResultStrip />
      <WhyInvestSection />

      <section className="section services-section">
        <SectionHeading
          eyebrow="Servicos"
          title="O que eu posso construir para sua empresa."
          description="Cada projeto pode comecar pequeno e evoluir conforme sua empresa ganha clareza, publico e necessidade de novas funcionalidades."
          split
        />
        <ServicesGrid items={services.slice(0, 3)} />
        <div className="section-action">
          <ActionLink className="secondary-action" to="/servicos">
            Ver todos os servicos
            <ArrowRight aria-hidden="true" size={18} />
          </ActionLink>
        </div>
      </section>

      <section className="section packages-section">
        <SectionHeading
          eyebrow="Solucoes"
          title="Escolha o tipo de projeto que combina com o seu momento."
        />
        <PackagesGrid items={packages} />
      </section>

      <section className="section process-section">
        <SectionHeading
          eyebrow="Processo"
          title="Do primeiro contato ate o site publicado."
          description="O caminho e organizado para voce saber o que esta sendo feito, o que falta decidir e quando o projeto fica pronto para ir ao ar."
          split
        />
        <ProcessGrid items={processSteps} />
      </section>

      <CtaSection />
      <FaqSection />
    </main>
  )
}
