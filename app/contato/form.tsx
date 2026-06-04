"use client"

import { useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Send,
  MessageCircle,
  Mail,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config"
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact"

const serviceOptions = [
  { value: "web", label: "Desenvolvimento Web" },
  { value: "mobile", label: "App Mobile" },
  { value: "backend", label: "Backend/API" },
  { value: "ia", label: "Automação com IA" },
  { value: "manutencao", label: "Manutenção de Sistema" },
  { value: "saas", label: "SaaS/MVP" },
  { value: "outro", label: "Outro" },
]

const budgetOptions = [
  { value: "ate-5k", label: "Até R$ 5.000" },
  { value: "5k-10k", label: "R$ 5.000 - R$ 10.000" },
  { value: "10k-20k", label: "R$ 10.000 - R$ 20.000" },
  { value: "20k-plus", label: "Acima de R$ 20.000" },
  { value: "nao-sei", label: "Ainda não sei" },
]

const hasSystemOptions = [
  { value: "nao", label: "Não, é um projeto novo" },
  { value: "planilhas", label: "Uso planilhas/Excel" },
  { value: "sistema-basico", label: "Sim, mas preciso melhorar" },
  { value: "sistema-completo", label: "Sim, preciso de integração" },
]

export function ContatoForm() {
  const searchParams = useSearchParams()
  const defaultService = searchParams.get("servico") || ""
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: defaultService,
      budget: "",
      challenge: "",
      hasSystem: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setSubmitError(null)
    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })

        const result = await res.json()

        if (!res.ok) {
          if (result.errors) {
            const firstError = Object.values(result.errors).flat()[0]
            setSubmitError(
              typeof firstError === "string"
                ? firstError
                : "Erro de validação. Verifique os campos."
            )
          } else {
            setSubmitError(
              result.error || "Erro ao enviar mensagem. Tente novamente."
            )
          }
          return
        }

        setIsSubmitted(true)
      } catch {
        setSubmitError("Erro de conexão. Verifique sua internet e tente novamente.")
      }
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1 flex items-center justify-center py-16 md:py-24">
          <div className="mx-auto max-w-xl px-4 text-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--success)]/10 text-[var(--success)] mx-auto mb-6"
              aria-hidden="true"
            >
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="text-3xl font-medium text-[var(--ink-deep)] mb-4">
              Mensagem enviada!
            </h1>
            <p className="text-lg text-[var(--slate)] mb-8">
              Obrigado pelo contato. Retornaremos em até {siteConfig.contact.responseTime} com uma
              proposta personalizada para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="w-full sm:w-auto rounded-full bg-[var(--ink-button)] text-[var(--on-ink-button)] hover:bg-[var(--charcoal)]"
              >
                <Link href="/">Voltar para Home</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto rounded-full border-2 border-[var(--ink-deep)] text-[var(--ink-deep)]"
              >
                <a
                  href={getWhatsAppUrl("form")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--canvas)] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-medium text-[var(--ink-deep)] leading-tight tracking-tight text-balance">
                Vamos conversar sobre seu projeto
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--slate)] leading-relaxed text-pretty">
                Preencha o formulário ou fale diretamente no WhatsApp. Respondemos em até {siteConfig.contact.responseTime}.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-[var(--surface-soft)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mb-6">
                    Outras formas de contato
                  </h2>
                </div>

                {/* WhatsApp Card */}
                <a
                  href={getWhatsAppUrl("project")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-2xl hover:border-[var(--success)] transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--success)]/10 text-[var(--success)]">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--ink-deep)]">WhatsApp</div>
                    <div className="text-sm text-[var(--slate)]">Resposta mais rápida</div>
                    <div className="text-sm text-[var(--primary)] font-medium mt-1">Clique para conversar</div>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-6 bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-2xl hover:border-[var(--primary)] transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--ink-deep)]">E-mail</div>
                    <div className="text-sm text-[var(--slate)]">{siteConfig.contact.email}</div>
                  </div>
                </a>

                {/* Response Time */}
                <div className="flex items-start gap-4 p-6 bg-[var(--ink-deep)] rounded-2xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Tempo de resposta</div>
                    <div className="text-sm text-[var(--stone)]">{siteConfig.contact.responseTime}</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-3xl p-6 md:p-10">
                  <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mb-2">
                    Solicite um orçamento
                  </h2>
                  <p className="text-[var(--slate)] mb-8">
                    Preencha os campos abaixo para receber uma proposta personalizada.
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome completo *</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-mail *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="seu@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Phone & Company */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>WhatsApp</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(11) 99999-9999" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Empresa</FormLabel>
                              <FormControl>
                                <Input placeholder="Nome da empresa" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Service & Budget */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tipo de serviço *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {serviceOptions.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Orçamento estimado</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {budgetOptions.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Challenge */}
                      <FormField
                        control={form.control}
                        name="challenge"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Qual seu principal desafio hoje? *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ex: Preciso automatizar meu atendimento via WhatsApp"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Has System */}
                      <FormField
                        control={form.control}
                        name="hasSystem"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Você já tem algum sistema em uso?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {hasSystemOptions.map((opt) => (
                                  <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Conte mais sobre seu projeto</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={4}
                                placeholder="Descreva seu projeto, funcionalidades desejadas, referências..."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Error */}
                      {submitError && (
                        <div
                          role="alert"
                          className="rounded-lg border border-[var(--critical)]/20 bg-[var(--critical)]/5 p-4 text-sm text-[var(--critical)]"
                        >
                          {submitError}
                        </div>
                      )}

                      {/* Submit */}
                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={isPending}
                          className="w-full rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-deep)] py-6 text-base font-bold disabled:opacity-50"
                        >
                          {isPending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar solicitação
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                        <p className="text-xs text-[var(--stone)] text-center mt-4">
                          Ao enviar, você concorda com nossa{" "}
                          <Link href="/privacidade" className="text-[var(--primary)] hover:underline">
                            Política de Privacidade
                          </Link>
                        </p>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
