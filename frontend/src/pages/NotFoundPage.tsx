import { ArrowRight } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { ActionLink } from '../components/ui/ActionLink'
import { useI18n } from '../i18n/I18nContext'

export function NotFoundPage() {
  const { t } = useI18n()

  return (
    <main>
      <PageHero
        eyebrow={t.notFound.eyebrow}
        title={t.notFound.title}
        description={t.notFound.description}
      >
        <ActionLink to="/">
          {t.common.backHome}
          <ArrowRight aria-hidden="true" size={18} />
        </ActionLink>
      </PageHero>
    </main>
  )
}
