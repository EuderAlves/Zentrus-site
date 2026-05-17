import type { ProcessStep } from '../../types/content'
import { ProcessStepCard } from '../cards/ProcessStepCard'

type ProcessGridProps = {
  items: ProcessStep[]
}

export function ProcessGrid({ items }: ProcessGridProps) {
  return (
    <div className="process-grid">
      {items.map((step) => (
        <ProcessStepCard key={step.step} step={step} />
      ))}
    </div>
  )
}
