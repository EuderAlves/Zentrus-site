import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PackageOption } from '../../types/content'

type PackageCardProps = {
  packageItem: PackageOption
}

export function PackageCard({ packageItem }: PackageCardProps) {
  return (
    <article className="package-card">
      <div>
        <span className="package-tag">Projeto {packageItem.name}</span>
        <h3>{packageItem.name}</h3>
        <p>{packageItem.idealFor}</p>
      </div>

      <ul>
        {packageItem.items.map((item) => (
          <li key={item}>
            <CheckCircle2 aria-hidden="true" size={17} />
            {item}
          </li>
        ))}
      </ul>

      <Link to="/orcamento">
        Pedir proposta
        <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </article>
  )
}
