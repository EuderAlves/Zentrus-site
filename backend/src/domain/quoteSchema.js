import { z } from 'zod'

export const quoteSchema = z.object({
  message: z
    .string()
    .trim()
    .min(10, 'Descreva sua necessidade com pelo menos 10 caracteres.')
    .max(4000, 'A descricao deve ter no maximo 4000 caracteres.'),
  name: z
    .string()
    .trim()
    .min(2, 'Informe seu nome.')
    .max(100, 'O nome deve ter no maximo 100 caracteres.'),
  email: z
    .string()
    .trim()
    .email('Informe um email valido.')
    .max(160, 'O email deve ter no maximo 160 caracteres.'),
  phone: z
    .string()
    .trim()
    .min(8, 'Informe um telefone ou WhatsApp valido.')
    .max(30, 'O telefone deve ter no maximo 30 caracteres.'),
})

export function getFirstValidationError(error) {
  const errors = error.flatten().fieldErrors
  const firstError = Object.values(errors).flat()[0]

  return {
    errors,
    message: firstError || 'Confira os dados enviados.',
  }
}
