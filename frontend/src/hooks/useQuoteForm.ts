import { useMemo, useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
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
  const { t } = useI18n()
  const [form, setForm] = useState<QuoteFormFields>(initialForm)
  const [showContactFields, setShowContactFields] = useState(false)
  const [submitState, setSubmitState] = useState<QuoteSubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [lastSubmittedName, setLastSubmittedName] = useState('')

  const whatsappLink = useMemo(() => {
    if (!whatsappNumber) {
      return ''
    }

    const customerName = lastSubmittedName || form.name || t.quoteForm.customerFallback
    const text = `${t.quoteForm.successTitle} ${customerName} - ${t.brand}`

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  }, [form.name, lastSubmittedName, t.brand, t.quoteForm.customerFallback, t.quoteForm.successTitle])

  function updateField(field: keyof QuoteFormFields, value: string) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }))
    setErrorMessage('')
  }

  function requestContactFields() {
    if (form.message.trim().length < 10) {
      setErrorMessage(t.quoteForm.minMessageError)
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
          : t.quoteForm.genericError,
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
