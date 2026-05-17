import { ArrowRight } from 'lucide-react'
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
import { useSiteContent } from '../hooks/useSiteContent'
import { useI18n } from '../i18n/I18nContext'

export function HomePage() {
  const { t } = useI18n()
  const { packages, processSteps, services } = useSiteContent()

  return (
    <main>
      <HeroSection />
      <ResultStrip />
      <WhyInvestSection />

      <section className="section services-section">
        <SectionHeading
          eyebrow={t.homeServices.eyebrow}
          title={t.homeServices.title}
          description={t.homeServices.description}
          split
        />
        <ServicesGrid items={services.slice(0, 3)} />
        <div className="section-action">
          <ActionLink className="secondary-action" to="/servicos">
            {t.common.seeAllServices}
            <ArrowRight aria-hidden="true" size={18} />
          </ActionLink>
        </div>
      </section>

      <section className="section packages-section">
        <SectionHeading
          eyebrow={t.homeSolutions.eyebrow}
          title={t.homeSolutions.title}
        />
        <PackagesGrid items={packages} />
      </section>

      <section className="section process-section">
        <SectionHeading
          eyebrow={t.homeProcess.eyebrow}
          title={t.homeProcess.title}
          description={t.homeProcess.description}
          split
        />
        <ProcessGrid items={processSteps} />
      </section>

      <CtaSection />
      <FaqSection />
    </main>
  )
}
