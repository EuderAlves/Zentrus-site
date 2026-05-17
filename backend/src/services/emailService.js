import { Resend } from 'resend'

const ownerEmail = process.env.OWNER_EMAIL || 'euder.alv@gmail.com'
const fromEmail = process.env.RESEND_FROM_EMAIL || 'Zentrus Tecnologia <onboarding@resend.dev>'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function buildOwnerEmail(quote) {
  const requestedAt = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(quote.requestedAt))

  return {
    subject: `Novo orcamento solicitado por ${quote.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
        <h1 style="margin: 0 0 16px;">Novo pedido de orcamento</h1>
        <p><strong>Nome:</strong> ${escapeHtml(quote.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(quote.email)}</p>
        <p><strong>Telefone/WhatsApp:</strong> ${escapeHtml(quote.phone)}</p>
        <p><strong>Data:</strong> ${escapeHtml(requestedAt)}</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-line;">${escapeHtml(quote.message)}</p>
      </div>
    `,
    text: [
      'Novo pedido de orcamento',
      `Nome: ${quote.name}`,
      `Email: ${quote.email}`,
      `Telefone/WhatsApp: ${quote.phone}`,
      `Data: ${requestedAt}`,
      '',
      quote.message,
    ].join('\n'),
  }
}

function buildCustomerEmail(quote) {
  return {
    subject: 'Recebemos sua solicitacao de orcamento',
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
        <h1 style="margin: 0 0 16px;">Recebemos sua solicitacao</h1>
        <p>Olá, ${escapeHtml(quote.name)}.</p>
        <p>
          Seu pedido de orcamento foi recebido pela Zentrus Tecnologia.
          Vamos analisar as informacoes e retornar o mais breve possivel.
        </p>
        <p><strong>Resumo enviado:</strong></p>
        <p style="white-space: pre-line;">${escapeHtml(quote.message)}</p>
        <p style="margin-top: 24px;">Atenciosamente,<br />Zentrus Tecnologia</p>
      </div>
    `,
    text: [
      `Olá, ${quote.name}.`,
      '',
      'Seu pedido de orcamento foi recebido pela Zentrus Tecnologia.',
      'Vamos analisar as informacoes e retornar o mais breve possivel.',
      '',
      'Resumo enviado:',
      quote.message,
      '',
      'Atenciosamente,',
      'Zentrus Tecnologia',
    ].join('\n'),
  }
}

export async function sendQuoteEmails(quote) {
  if (!process.env.RESEND_API_KEY) {
    console.info('RESEND_API_KEY ausente. Email simulado em modo local:', quote)
    return { mode: 'mock' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const ownerEmailContent = buildOwnerEmail(quote)
  const customerEmailContent = buildCustomerEmail(quote)

  await Promise.all([
    resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      replyTo: quote.email,
      ...ownerEmailContent,
    }),
    resend.emails.send({
      from: fromEmail,
      to: quote.email,
      replyTo: ownerEmail,
      ...customerEmailContent,
    }),
  ])

  return { mode: 'resend' }
}
