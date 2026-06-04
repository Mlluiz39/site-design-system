import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { contactFormSchema } from "@/lib/validations/contact"
import { siteConfig } from "@/lib/site-config"

const serviceLabels: Record<string, string> = {
  web: "Desenvolvimento Web",
  mobile: "App Mobile",
  backend: "Backend/API",
  ia: "Automação com IA",
  manutencao: "Manutenção de Sistema",
  saas: "SaaS/MVP",
  outro: "Outro",
}

const budgetLabels: Record<string, string> = {
  "ate-5k": "Até R$ 5.000",
  "5k-10k": "R$ 5.000 - R$ 10.000",
  "10k-20k": "R$ 10.000 - R$ 20.000",
  "20k-plus": "Acima de R$ 20.000",
  "nao-sei": "Ainda não sei",
}

const hasSystemLabels: Record<string, string> = {
  nao: "Não, é um projeto novo",
  planilhas: "Uso planilhas/Excel",
  "sistema-basico": "Sim, mas preciso melhorar",
  "sistema-completo": "Sim, preciso de integração",
}

function buildEmailHtml(data: {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  budget?: string
  challenge: string
  hasSystem?: string
  message?: string
}) {
  const rows = [
    { label: "Nome", value: data.name },
    { label: "E-mail", value: data.email },
    { label: "WhatsApp", value: data.phone || "—" },
    { label: "Empresa", value: data.company || "—" },
    {
      label: "Tipo de serviço",
      value: serviceLabels[data.service] || data.service,
    },
    {
      label: "Orçamento",
      value: data.budget ? budgetLabels[data.budget] || data.budget : "—",
    },
    { label: "Desafio principal", value: data.challenge },
    {
      label: "Sistema atual",
      value: data.hasSystem
        ? hasSystemLabels[data.hasSystem] || data.hasSystem
        : "—",
    },
    { label: "Mensagem adicional", value: data.message || "—" },
  ]

  const rowsHtml = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;color:#444950;border-bottom:1px solid #dee3e9;width:180px;vertical-align:top;">
          ${r.label}
        </td>
        <td style="padding:8px 12px;color:#0a1317;border-bottom:1px solid #dee3e9;">
          ${r.value}
        </td>
      </tr>`
    )
    .join("")

  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;background:#f1f4f7;">
      <div style="max-width:600px;margin:24px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <div style="background:#0064e0;padding:24px 32px;">
          <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">
            Nova solicitação de contato
          </h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">
            Enviada pelo formulário do site ${siteConfig.name}
          </p>
        </div>
        <div style="padding:24px 32px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${rowsHtml}
          </table>
          <div style="margin-top:24px;padding:16px;background:#f1f4f7;border-radius:8px;">
            <p style="margin:0;font-size:12px;color:#5d6c7b;">
              💡 Responda diretamente a este e-mail para entrar em contato com <strong>${data.name}</strong>.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const parsed = contactFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const data = parsed.data

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"
    const toEmail =
      process.env.RESEND_TO_EMAIL || siteConfig.contact.email

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: `${siteConfig.name} <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `Nova solicitação de contato - ${data.name}`,
      html: buildEmailHtml(data),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact form:", error)
    const message =
      error instanceof Error ? error.message : "Erro desconhecido"
    return NextResponse.json(
      { success: false, error: `Erro ao enviar: ${message}` },
      { status: 500 }
    )
  }
}
