"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getWhatsAppUrl } from "@/lib/site-config"

const faqs = [
  {
    category: "Preços e Pagamento",
    items: [
      {
        question: "Quanto custa desenvolver um sistema ou aplicativo?",
        answer: "Depende do escopo. Referências: sites institucionais a partir de R$500, sistemas web a partir de R$2.500, apps mobile a partir de R$1.000. Fazemos análise gratuita antes de qualquer proposta.",
      },
      {
        question: "Vocês são mais baratos que uma agência tradicional?",
        answer: "Na maioria dos casos, sim - até 30-40% mais barato. Isso acontece porque usamos automação e IA para acelerar partes do desenvolvimento, reduzindo horas de trabalho sem abrir mão de qualidade.",
      },
      {
        question: "Preciso pagar tudo adiantado?",
        answer: "Não. Trabalhamos com 30-50% de entrada e o restante em marcos de entrega ou no deploy final. Para projetos maiores, parcelamos em até 3x.",
      },
    ],
  },
  {
    category: "Prazos e Entrega",
    items: [
      {
        question: "Quanto tempo leva para entregar meu projeto?",
        answer: "Sites simples: 1-2 semanas. Sistemas web: 3-8 semanas. Apps mobile: 4-10 semanas. MVPs: até 30 dias. Prazos acordados no início são cumpridos.",
      },
      {
        question: "E se o projeto atrasar ou não ficar como eu espero?",
        answer: "Trabalhamos com entregas parciais (sprints de 1-2 semanas). Você valida antes de continuar. Ajustes dentro do escopo combinado são feitos sem custo extra.",
      },
      {
        question: "Como funciona o processo de desenvolvimento?",
        answer: "Começamos com uma análise gratuita, depois definimos arquitetura e escopo. Desenvolvemos em sprints com entregas parciais, você valida cada etapa. Após o deploy, oferecemos 30 dias de suporte incluso.",
      },
    ],
  },
  {
    category: "Suporte e Manutenção",
    items: [
      {
        question: "Após a entrega, quem cuida do sistema?",
        answer: "Todo projeto inclui 30 dias de suporte pós-entrega. Depois, oferecemos planos de manutenção a partir de R$100/mês com SLA de 24h úteis.",
      },
      {
        question: "O que está incluso no suporte pós-entrega?",
        answer: "Correção de bugs, pequenos ajustes, treinamento da equipe e acompanhamento da estabilidade do sistema em produção.",
      },
      {
        question: "Vocês hospedam o sistema ou eu preciso contratar hospedagem?",
        answer: "Recomendamos e configuramos a infraestrutura ideal para seu projeto (Vercel, AWS, etc). A hospedagem é paga separadamente, mas incluímos a configuração inicial.",
      },
    ],
  },
  {
    category: "Tecnologia e Qualidade",
    items: [
      {
        question: "Que tecnologias vocês usam?",
        answer: "React e Next.js para web, React Native para mobile, Node.js para backend, PostgreSQL para banco de dados, e Docker para infraestrutura. Usamos sempre tecnologias modernas e bem estabelecidas.",
      },
      {
        question: "O código fonte é meu?",
        answer: "Sim, 100%. Entregamos o repositório completo com código documentado. Você é dono do código e pode contratar qualquer desenvolvedor para dar continuidade se desejar.",
      },
      {
        question: "Como vocês garantem a qualidade do código?",
        answer: "Seguimos boas práticas de engenharia de software: testes automatizados, code review, documentação e arquitetura limpa. O código é entregue pronto para escalar.",
      },
    ],
  },
  {
    category: "Portfólio e Referências",
    items: [
      {
        question: "Consigo ver exemplos de projetos anteriores?",
        answer: "Sim, acesse nosso portfólio. Para projetos sob NDA, compartilhamos detalhes técnicos em conversa privada.",
      },
      {
        question: "Vocês têm referências de clientes?",
        answer: "Sim, podemos conectar você com clientes anteriores que aceitaram ser referência. Basta solicitar durante nossa conversa inicial.",
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-[var(--hairline-soft)] rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left bg-[var(--canvas)] hover:bg-[var(--surface-soft)] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-[var(--ink-deep)] pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[var(--steel)] flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[var(--steel)] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 bg-[var(--canvas)]">
          <p className="text-[var(--slate)] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--canvas)] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-medium text-[var(--ink-deep)] leading-tight tracking-tight text-balance">
                Perguntas frequentes
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--slate)] leading-relaxed text-pretty">
                Tire suas dúvidas sobre preços, prazos, tecnologias e nosso processo de trabalho.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24 bg-[var(--surface-soft)]">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="space-y-12">
              {faqs.map((section) => (
                <div key={section.category}>
                  <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mb-6">
                    {section.category}
                  </h2>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <FAQItem
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 md:py-24 bg-[var(--canvas)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="bg-[var(--surface-soft)] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-medium text-[var(--ink-deep)] mb-4">
                Ainda tem dúvidas?
              </h2>
              <p className="text-[var(--slate)] mb-8 max-w-xl mx-auto">
                Não encontrou a resposta que procurava? Entre em contato e responderemos em até 24h úteis.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  className="w-full sm:w-auto rounded-full bg-[var(--ink-button)] text-[var(--on-ink-button)] hover:bg-[var(--charcoal)]"
                >
                  <Link href="/contato">
                    Enviar mensagem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto rounded-full border-2 border-[var(--ink-deep)] text-[var(--ink-deep)] hover:bg-[var(--surface-soft)]"
                >
                  <a
                    href={getWhatsAppUrl("doubt")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
