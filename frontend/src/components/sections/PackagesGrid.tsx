import type { PackageOption } from '../../types/content'
import { PackageCard } from '../cards/PackageCard'

type PackagesGridProps = {
  items: PackageOption[]
}

export function PackagesGrid({ items }: PackagesGridProps) {
  return (
    <div className="package-grid">
      {items.map((packageItem) => (
        <PackageCard key={packageItem.name} packageItem={packageItem} />
      ))}
    </div>
  )
}
