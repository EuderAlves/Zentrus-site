import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ActionLinkProps = {
  children: ReactNode
  className?: string
  to: string
}

export function ActionLink({ children, className = 'primary-action', to }: ActionLinkProps) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}
