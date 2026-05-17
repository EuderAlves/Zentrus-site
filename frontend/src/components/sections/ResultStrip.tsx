import { useSiteContent } from '../../hooks/useSiteContent'

export function ResultStrip() {
  const { resultMetrics } = useSiteContent()

  return (
    <section className="result-strip">
      {resultMetrics.map((result) => (
        <article key={result.value}>
          <strong>{result.value}</strong>
          <span>{result.label}</span>
        </article>
      ))}
    </section>
  )
}
