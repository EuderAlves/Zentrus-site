import { FaqSection } from '../components/sections/FaqSection'
import { PageHero } from '../components/sections/PageHero'
import { QuoteRequestSection } from '../components/sections/QuoteRequestSection'

export function QuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Orcamento"
        title="Solicite uma proposta para seu site, sistema ou suporte."
        description="Quanto mais claro for o pedido, melhor consigo entender o escopo. Mas nao precisa estar perfeito: descreva sua ideia com suas palavras."
      >
        <div className="hero-note">
          <strong>O que enviar?</strong>
          <span>Tipo de empresa, objetivo do site, paginas desejadas e exemplos de funcionalidades.</span>
        </div>
      </PageHero>

      <QuoteRequestSection />
      <FaqSection />
    </main>
  )
}
