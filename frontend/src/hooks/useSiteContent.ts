import { benefitIcons, qualityIcons, serviceIcons } from '../data/siteContent'
import { useI18n } from '../i18n/I18nContext'

export function useSiteContent() {
  const { t } = useI18n()

  const benefits = t.benefits.map((benefit, index) => ({
    ...benefit,
    icon: benefitIcons[index],
  }))

  const services = t.services.map((service, index) => ({
    ...service,
    icon: serviceIcons[index],
  }))

  const qualityPoints = t.qualityPoints.map((point, index) => ({
    ...point,
    icon: qualityIcons[index],
  }))

  return {
    benefits,
    services,
    qualityPoints,
    faqs: t.faqs,
    packages: t.packages,
    processSteps: t.processSteps,
    resultMetrics: t.resultMetrics,
  }
}
