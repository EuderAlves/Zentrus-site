import { ArrowRight } from 'lucide-react'
import { ActionLink } from '../ui/ActionLink'

type CtaSectionProps = {
  eyebrow?: string
  title?: string
  text?: string
}

export function CtaSection({
  eyebrow = 'Proximo passo',
  title = 'Vamos transformar sua ideia em uma proposta clara.',
  text = 'Me conte o que sua empresa precisa e eu retorno com um caminho de projeto objetivo.',
}: CtaSectionProps) {
  return (
    <section className="cta-section">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <ActionLink to="/orcamento">
        Solicitar orcamento
        <ArrowRight aria-hidden="true" size={18} />
      </ActionLink>
    </section>
  )
}
