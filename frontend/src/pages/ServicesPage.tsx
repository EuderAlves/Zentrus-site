import { CtaSection } from '../components/sections/CtaSection'
import { PageHero } from '../components/sections/PageHero'
import { QualitySection } from '../components/sections/QualitySection'
import { SectionHeading } from '../components/sections/SectionHeading'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { services } from '../data/siteContent'

export function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Servicos"
        title="Servicos digitais para sua empresa vender e operar melhor."
        description="Aqui ficam as possibilidades principais de projeto. Voce pode contratar algo simples, como um site institucional, ou evoluir para paginas de venda, sistemas e suporte tecnico."
      >
        <div className="hero-note">
          <strong>Comece pelo essencial.</strong>
          <span>Depois o projeto pode receber novas paginas, formularios, integracoes e banco de dados.</span>
        </div>
      </PageHero>

      <section className="section services-section">
        <SectionHeading
          eyebrow="O que posso criar"
          title="Escolha o servico que mais combina com a sua necessidade atual."
          description="Se ainda nao souber exatamente qual caminho seguir, o pedido de orcamento ajuda a entender o melhor formato."
        />
        <ServicesGrid items={services} />
      </section>

      <QualitySection />
      <CtaSection
        title="Tem uma ideia de site ou sistema?"
        text="Envie uma descricao do que voce quer criar e eu ajudo a transformar isso em um escopo claro."
      />
    </main>
  )
}
