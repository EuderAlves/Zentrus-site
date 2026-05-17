import type { ProcessStep } from '../../types/content'

type ProcessStepCardProps = {
  step: ProcessStep
}

export function ProcessStepCard({ step }: ProcessStepCardProps) {
  return (
    <article>
      <span>{step.step}</span>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </article>
  )
}
