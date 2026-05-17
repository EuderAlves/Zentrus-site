import type { FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Clock3, MessageCircle, Send } from 'lucide-react'
import { useQuoteForm } from '../../hooks/useQuoteForm'
import { useI18n } from '../../i18n/I18nContext'

export function QuoteRequestSection() {
  const { t } = useI18n()
  const {
    form,
    showContactFields,
    submitState,
    errorMessage,
    whatsappLink,
    updateField,
    requestContactFields,
    submitQuote,
    resetQuoteForm,
  } = useQuoteForm()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void submitQuote()
  }

  return (
    <section className="quote-section">
      <div className="quote-copy">
        <p className="eyebrow">{t.quoteForm.eyebrow}</p>
        <h2>{t.quoteForm.title}</h2>
        <p>{t.quoteForm.description}</p>

        <div className="quote-info">
          <span>
            <Clock3 aria-hidden="true" size={18} />
            {t.quoteForm.responseTime}
          </span>
        </div>
      </div>

      <form className="quote-form" onSubmit={handleSubmit}>
        {submitState === 'success' ? (
          <div className="success-message" role="status">
            <CheckCircle2 aria-hidden="true" size={36} />
            <h3>{t.quoteForm.successTitle}</h3>
            <p>{t.quoteForm.successText}</p>

            <div className="success-actions">
              <button type="button" className="secondary-button" onClick={resetQuoteForm}>
                {t.quoteForm.sendAnother}
              </button>

              {whatsappLink && (
                <a className="whatsapp-button" href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" size={18} />
                  {t.quoteForm.continueWhatsApp}
                </a>
              )}
            </div>
          </div>
        ) : (
          <>
            <label htmlFor="message">{t.quoteForm.needLabel}</label>
            <textarea
              id="message"
              name="message"
              minLength={10}
              placeholder={t.quoteForm.needPlaceholder}
              required
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
            />

            {showContactFields && (
              <div className="contact-fields">
                <label htmlFor="name">{t.quoteForm.nameLabel}</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  minLength={2}
                  required
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                />

                <label htmlFor="email">{t.quoteForm.emailLabel}</label>
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                />

                <label htmlFor="phone">{t.quoteForm.phoneLabel}</label>
                <input
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  minLength={8}
                  required
                  value={form.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                />
              </div>
            )}

            {errorMessage && <p className="form-error">{errorMessage}</p>}

            {!showContactFields ? (
              <button type="button" className="submit-button" onClick={requestContactFields}>
                {t.quoteForm.send}
                <ArrowRight aria-hidden="true" size={18} />
              </button>
            ) : (
              <button type="submit" className="submit-button" disabled={submitState === 'sending'}>
                {submitState === 'sending' ? t.quoteForm.sending : t.quoteForm.confirm}
                <Send aria-hidden="true" size={18} />
              </button>
            )}
          </>
        )}
      </form>
    </section>
  )
}
