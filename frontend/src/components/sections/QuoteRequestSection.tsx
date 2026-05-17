import type { FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Clock3, Mail, MessageCircle, Send } from 'lucide-react'
import { contactEmail } from '../../data/siteContent'
import { useQuoteForm } from '../../hooks/useQuoteForm'

export function QuoteRequestSection() {
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
        <p className="eyebrow">Pedido de orcamento</p>
        <h2>Me conte o que voce quer vender, divulgar ou organizar.</h2>
        <p>
          Descreva sua ideia em poucas linhas. Depois informe seus dados para eu receber a
          solicitacao no email e retornar com os proximos passos.
        </p>

        <div className="quote-info">
          <span>
            <Clock3 aria-hidden="true" size={18} />
            Retorno o mais breve possivel
          </span>
          <a href={`mailto:${contactEmail}`}>
            <Mail aria-hidden="true" size={18} />
            {contactEmail}
          </a>
        </div>
      </div>

      <form className="quote-form" onSubmit={handleSubmit}>
        {submitState === 'success' ? (
          <div className="success-message" role="status">
            <CheckCircle2 aria-hidden="true" size={36} />
            <h3>Solicitacao enviada.</h3>
            <p>
              Recebi seu pedido de orcamento e vou retornar o mais breve possivel.
            </p>

            <div className="success-actions">
              <button type="button" className="secondary-button" onClick={resetQuoteForm}>
                Enviar outro pedido
              </button>

              {whatsappLink && (
                <a className="whatsapp-button" href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" size={18} />
                  Continuar no WhatsApp
                </a>
              )}
            </div>
          </div>
        ) : (
          <>
            <label htmlFor="message">O que voce precisa?</label>
            <textarea
              id="message"
              name="message"
              minLength={10}
              placeholder="Exemplo: Preciso de um site para minha empresa apresentar servicos, receber pedidos de orcamento e passar mais confianca."
              required
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
            />

            {showContactFields && (
              <div className="contact-fields">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  minLength={2}
                  required
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                />

                <label htmlFor="phone">Telefone ou WhatsApp</label>
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
                Enviar
                <ArrowRight aria-hidden="true" size={18} />
              </button>
            ) : (
              <button type="submit" className="submit-button" disabled={submitState === 'sending'}>
                {submitState === 'sending' ? 'Enviando...' : 'Confirmar solicitacao'}
                <Send aria-hidden="true" size={18} />
              </button>
            )}
          </>
        )}
      </form>
    </section>
  )
}
