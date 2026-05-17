import { ArrowRight } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { ActionLink } from '../components/ui/ActionLink'

export function NotFoundPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pagina nao encontrada"
        title="Essa pagina nao existe."
        description="O endereco pode ter mudado ou sido digitado incorretamente."
      >
        <ActionLink to="/">
          Voltar para a home
          <ArrowRight aria-hidden="true" size={18} />
        </ActionLink>
      </PageHero>
    </main>
  )
}
