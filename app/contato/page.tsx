"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Send, MessageCircle, Mail, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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

function ContatoForm() {
  const searchParams = useSearchParams()
  const defaultService = searchParams.get("servico") || ""
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService,
    budget: "",
    challenge: "",
    hasSystem: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16 md:py-24">
          <div className="mx-auto max-w-xl px-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--success)]/10 text-[var(--success)] mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="text-3xl font-medium text-[var(--ink-deep)] mb-4">
              Mensagem enviada!
            </h1>
            <p className="text-lg text-[var(--slate)] mb-8">
              Obrigado pelo contato. Retornaremos em até 24h úteis com uma proposta personalizada para seu projeto.
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
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Acabei%20de%20enviar%20um%20formul%C3%A1rio%20pelo%20site."
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
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--canvas)] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-medium text-[var(--ink-deep)] leading-tight tracking-tight text-balance">
                Vamos conversar sobre seu projeto
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--slate)] leading-relaxed text-pretty">
                Preencha o formulário ou fale diretamente no WhatsApp. Respondemos em até 24h úteis.
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
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
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
                  href="mailto:contato@mlluizdevtech.com.br"
                  className="flex items-start gap-4 p-6 bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-2xl hover:border-[var(--primary)] transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--ink-deep)]">E-mail</div>
                    <div className="text-sm text-[var(--slate)]">contato@mlluizdevtech.com.br</div>
                  </div>
                </a>
                
                {/* Response Time */}
                <div className="flex items-start gap-4 p-6 bg-[var(--ink-deep)] rounded-2xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Tempo de resposta</div>
                    <div className="text-sm text-[var(--stone)]">Até 24h úteis</div>
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
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--ink)] mb-2">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[var(--hairline)] rounded-lg bg-[var(--canvas)] text-[var(--ink)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--ink)] mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[var(--hairline)] rounded-lg bg-[var(--canvas)] text-[var(--ink)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--ink)] mb-2">
                          WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[var(--hairline)] rounded-lg bg-[var(--canvas)] text-[var(--ink)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[var(--ink)] mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[var(--hairline)] rounded-lg bg-[var(--canvas)] text-[var(--ink)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </div>
                    
                    {/* Service & Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-[var(--ink)] mb-2">
                          Tipo de serviço *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[var(--hairline)] rounded-lg bg-[var(--canvas)] text-[var(--ink)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                        >
                          <option value="">Selecione</option>
                          {serviceOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-[var(--ink)] mb-2">
                          Orçamento estimado
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[var(--hairline)] rounded-lg bg-[var(--canvas)] text-[var(--ink)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                        >
                          <option value="">Selecione</option>
                          {budgetOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {/* Challenge */}
                    <div>
                      <label htmlFor="challenge" className="block text-sm font-medium text-[var(--ink)] mb-2">
                        Qual seu principal desafio hoje? *
                      </label>
                      <input
                        type="text"
                        id="challenge"
                        name="challenge"
                        required
                        value={formData.challenge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--hairline)] rounded-lg bg-[var(--canvas)] text-[var(--ink)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                        placeholder="Ex: Preciso automatizar meu atendimento via WhatsApp"
                      />
                    </div>
                    
                    {/* Has System */}
                    <div>
                      <label htmlFor="hasSystem" className="block text-sm font-medium text-[var(--ink)] mb-2">
                        Você já tem algum sistema em uso?
                      </label>
                      <select
                        id="hasSystem"
                        name="hasSystem"
                        value={formData.hasSystem}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--hairline)] rounded-lg bg-[var(--canvas)] text-[var(--ink)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                      >
                        <option value="">Selecione</option>
                        <option value="nao">Não, é um projeto novo</option>
                        <option value="planilhas">Uso planilhas/Excel</option>
                        <option value="sistema-basico">Sim, mas preciso melhorar</option>
                        <option value="sistema-completo">Sim, preciso de integração</option>
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--ink)] mb-2">
                        Conte mais sobre seu projeto
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--hairline)] rounded-lg bg-[var(--canvas)] text-[var(--ink)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors resize-none"
                        placeholder="Descreva seu projeto, funcionalidades desejadas, referências..."
                      />
                    </div>
                    
                    {/* Submit */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-deep)] py-6 text-base font-bold disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          "Enviando..."
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

export default function ContatoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--canvas)]" />}>
      <ContatoForm />
    </Suspense>
  )
}
