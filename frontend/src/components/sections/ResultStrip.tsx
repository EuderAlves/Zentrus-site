import { resultMetrics } from '../../data/siteContent'

export function ResultStrip() {
  return (
    <section className="result-strip" aria-label="Indicadores de valor">
      {resultMetrics.map((result) => (
        <article key={result.value}>
          <strong>{result.value}</strong>
          <span>{result.label}</span>
        </article>
      ))}
    </section>
  )
}
