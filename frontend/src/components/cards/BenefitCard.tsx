import type { IconContent } from '../../types/content'

type BenefitCardProps = {
  benefit: IconContent
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = benefit.icon

  return (
    <article className="benefit-card">
      <Icon aria-hidden="true" size={26} />
      <h3>{benefit.title}</h3>
      <p>{benefit.text}</p>
    </article>
  )
}
