import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Selecione um tipo de serviço"),
  budget: z.string().optional(),
  challenge: z
    .string()
    .min(5, "Descreva seu desafio com mais detalhes")
    .max(500, "Máximo de 500 caracteres"),
  hasSystem: z.string().optional(),
  message: z.string().max(1000).optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
