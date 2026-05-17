import { CtaSection } from '../components/sections/CtaSection'
import { PackagesGrid } from '../components/sections/PackagesGrid'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/sections/SectionHeading'
import { packages } from '../data/siteContent'

const solutionBenefits = [
  'Escopo claro antes de comecar',
  'Projeto pensado para publicar sem complicacao',
  'Base preparada para crescer quando fizer sentido',
]

export function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solucoes"
        title="Projetos organizados pelo momento da sua empresa."
        description="Nem todo negocio precisa comecar com um sistema completo. Por isso as solucoes sao separadas por objetivo: presenca, conversao ou operacao."
      >
        <ul className="hero-checklist">
          {solutionBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </PageHero>

      <section className="section packages-section">
        <SectionHeading
          eyebrow="Formatos"
          title="Escolha uma direcao inicial para a proposta."
          description="Os formatos ajudam a definir o tamanho do projeto. O escopo final pode ser ajustado conforme sua necessidade real."
        />
        <PackagesGrid items={packages} />
      </section>

      <section className="section comparison-section">
        <SectionHeading
          eyebrow="Como decidir"
          title="Uma escolha simples para nao inflar o projeto antes da hora."
        />

        <div className="comparison-grid">
          <article>
            <span>01</span>
            <h3>Preciso aparecer melhor</h3>
            <p>Comece pelo projeto Presenca, com uma home profissional e contato claro.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Quero receber mais pedidos</h3>
            <p>Use Conversao, com formulario, email de confirmacao e copy mais direta.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Tenho processo para organizar</h3>
            <p>Va para Operacao, com backend, integracoes e base para banco de dados.</p>
          </article>
        </div>
      </section>

      <CtaSection
        title="Quer descobrir qual solucao faz sentido?"
        text="Conte o objetivo da sua empresa e eu retorno com uma sugestao de caminho."
      />
    </main>
  )
}
