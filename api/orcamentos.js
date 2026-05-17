import { getFirstValidationError, quoteSchema } from '../backend/src/domain/quoteSchema.js'
import { sendQuoteEmails } from '../backend/src/services/emailService.js'

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    response.status(405).json({
      message: 'Metodo nao permitido.',
    })
    return
  }

  try {
    const parsedQuote = quoteSchema.safeParse(request.body)

    if (!parsedQuote.success) {
      const validationError = getFirstValidationError(parsedQuote.error)

      response.status(400).json({
        message: validationError.message,
        errors: validationError.errors,
      })
      return
    }

    const quote = {
      ...parsedQuote.data,
      requestedAt: new Date().toISOString(),
    }

    const emailResult = await sendQuoteEmails(quote)

    response.status(201).json({
      success: true,
      mode: emailResult.mode,
    })
  } catch (error) {
    console.error(error)

    response.status(500).json({
      message: 'Erro interno no servidor.',
    })
  }
}
