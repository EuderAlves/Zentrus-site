import type { QuoteFormFields } from '../types/quote'

const apiUrl = import.meta.env.VITE_API_URL || ''

export async function submitQuoteRequest(form: QuoteFormFields) {
  const response = await fetch(`${apiUrl}/api/orcamentos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(data?.message || 'Nao foi possivel enviar sua solicitacao agora.')
  }

  return data
}
