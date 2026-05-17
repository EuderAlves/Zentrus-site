import type { IconContent } from '../../types/content'
import { ServiceCard } from '../cards/ServiceCard'

type ServicesGridProps = {
  items: IconContent[]
}

export function ServicesGrid({ items }: ServicesGridProps) {
  return (
    <div className="service-grid">
      {items.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  )
}
