import type { IconContent } from '../../types/content'

type ServiceCardProps = {
  service: IconContent
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <Icon aria-hidden="true" size={28} />
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </article>
  )
}
