export type QuoteFormFields = {
  message: string
  name: string
  email: string
  phone: string
}

export type QuoteSubmitState = 'idle' | 'sending' | 'success' | 'error'
