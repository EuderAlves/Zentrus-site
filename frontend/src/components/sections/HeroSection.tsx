import { ArrowRight, BarChart3, CheckCircle2 } from 'lucide-react'
import { proofPoints } from '../../data/siteContent'
import { ActionLink } from '../ui/ActionLink'

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">Sites profissionais para empresas</p>
        <h1>Seu site precisa gerar confianca antes de pedir um clique.</h1>
        <p className="hero-copy">
          A Zentrus Tecnologia cria sites, paginas de venda e sistemas simples para empresas
          que querem aparecer melhor, explicar seus servicos com clareza e receber pedidos de
          orcamento sem depender de improviso.
        </p>

        <div className="hero-actions">
          <ActionLink to="/orcamento">
            Quero pedir um orcamento
            <ArrowRight aria-hidden="true" size={18} />
          </ActionLink>
          <ActionLink className="secondary-action" to="/servicos">
            Ver o que posso criar
          </ActionLink>
        </div>

        <div className="hero-proof" aria-label="Diferenciais principais">
          {proofPoints.map((point) => (
            <span key={point}>
              <CheckCircle2 aria-hidden="true" size={18} />
              {point}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-showcase" aria-label="Previa de site profissional">
        <div className="browser-bar">
          <span></span>
          <span></span>
          <span></span>
          <strong>zentrus.dev/orcamento</strong>
        </div>

        <div className="showcase-body">
          <div className="showcase-copy">
            <span className="mini-label">Pagina pronta para vender</span>
            <strong>Transforme visitas em conversas comerciais.</strong>
            <p>Oferta clara, servicos organizados, prova de confianca e chamada para contato.</p>
          </div>

          <div className="conversion-panel">
            <div>
              <span>Leads captados</span>
              <strong>32</strong>
            </div>
            <BarChart3 aria-hidden="true" size={72} />
          </div>

          <div className="showcase-grid">
            <span>Home estrategica</span>
            <span>Formulario conectado</span>
            <span>Layout responsivo</span>
            <span>Suporte pos-entrega</span>
          </div>
        </div>
      </div>
    </section>
  )
}
