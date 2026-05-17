import { Router } from 'express'
import { getFirstValidationError, quoteSchema } from '../domain/quoteSchema.js'
import { sendQuoteEmails } from '../services/emailService.js'

const router = Router()

router.post('/', async (request, response, next) => {
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
    next(error)
  }
})

export default router
