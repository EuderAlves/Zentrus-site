import { CtaSection } from '../components/sections/CtaSection'
import { PageHero } from '../components/sections/PageHero'
import { ProcessGrid } from '../components/sections/ProcessGrid'
import { SectionHeading } from '../components/sections/SectionHeading'
import { processSteps } from '../data/siteContent'

export function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Processo"
        title="Um processo claro evita retrabalho e deixa o projeto mais leve."
        description="A construcao e dividida em etapas para voce saber o que precisa aprovar, o que esta sendo desenvolvido e quando o site pode ir para o ar."
      >
        <div className="hero-note">
          <strong>Transparencia no caminho.</strong>
          <span>Menos surpresa, mais clareza sobre escopo, prazo e prioridades.</span>
        </div>
      </PageHero>

      <section className="section process-section">
        <SectionHeading
          eyebrow="Etapas"
          title="Do primeiro contato ate a publicacao."
          description="Cada etapa tem um objetivo simples: entender, propor, criar e colocar no ar."
          split
        />
        <ProcessGrid items={processSteps} />
      </section>

      <section className="section delivery-section">
        <SectionHeading
          eyebrow="Durante o projeto"
          title="Voce acompanha o que esta sendo feito sem precisar entender de codigo."
        />

        <div className="delivery-grid">
          <article>
            <h3>Briefing objetivo</h3>
            <p>As primeiras informacoes definem oferta, publico, paginas e funcionalidades.</p>
          </article>
          <article>
            <h3>Ajustes com direcao</h3>
            <p>As mudancas sao feitas com foco em clareza, conversao e experiencia do cliente.</p>
          </article>
          <article>
            <h3>Entrega orientada</h3>
            <p>Voce recebe o projeto com explicacao sobre publicacao, formulario e proximos passos.</p>
          </article>
        </div>
      </section>

      <CtaSection
        title="Quer iniciar com um escopo bem definido?"
        text="Envie o que voce tem em mente e eu retorno com uma proposta organizada."
      />
    </main>
  )
}
