import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: ReactNode
  split?: boolean
}

export function SectionHeading({ eyebrow, title, description, split = false }: SectionHeadingProps) {
  if (split) {
    return (
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        {description && <p>{description}</p>}
      </div>
    )
  }

  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
