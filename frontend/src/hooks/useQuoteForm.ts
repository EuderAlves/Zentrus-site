import { useMemo, useState } from 'react'
import { submitQuoteRequest } from '../services/quoteApi'
import type { QuoteFormFields, QuoteSubmitState } from '../types/quote'

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || ''

const initialForm: QuoteFormFields = {
  message: '',
  name: '',
  email: '',
  phone: '',
}

export function useQuoteForm() {
  const [form, setForm] = useState<QuoteFormFields>(initialForm)
  const [showContactFields, setShowContactFields] = useState(false)
  const [submitState, setSubmitState] = useState<QuoteSubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [lastSubmittedName, setLastSubmittedName] = useState('')

  const whatsappLink = useMemo(() => {
    if (!whatsappNumber) {
      return ''
    }

    const customerName = lastSubmittedName || form.name || 'cliente'
    const text = `Ola, sou ${customerName} e solicitei um orcamento pelo site da Zentrus Tecnologia.`

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  }, [form.name, lastSubmittedName])

  function updateField(field: keyof QuoteFormFields, value: string) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }))
    setErrorMessage('')
  }

  function requestContactFields() {
    if (form.message.trim().length < 10) {
      setErrorMessage('Descreva sua ideia com pelo menos 10 caracteres.')
      return
    }

    setShowContactFields(true)
  }

  async function submitQuote() {
    setSubmitState('sending')
    setErrorMessage('')

    try {
      await submitQuoteRequest(form)

      setLastSubmittedName(form.name)
      setSubmitState('success')
      setShowContactFields(false)
      setForm(initialForm)
    } catch (error) {
      setSubmitState('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Nao foi possivel enviar sua solicitacao agora.',
      )
    }
  }

  function resetQuoteForm() {
    setSubmitState('idle')
    setErrorMessage('')
  }

  return {
    form,
    showContactFields,
    submitState,
    errorMessage,
    whatsappLink,
    updateField,
    requestContactFields,
    submitQuote,
    resetQuoteForm,
  }
}
