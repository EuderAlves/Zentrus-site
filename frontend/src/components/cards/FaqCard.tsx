import type { FaqItem } from '../../types/content'

type FaqCardProps = {
  faq: FaqItem
}

export function FaqCard({ faq }: FaqCardProps) {
  return (
    <article>
      <h3>{faq.question}</h3>
      <p>{faq.answer}</p>
    </article>
  )
}
