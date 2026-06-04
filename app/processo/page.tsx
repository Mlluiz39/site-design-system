import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Search, FileText, Code2, TestTube, Rocket, HeadphonesIcon, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nosso Processo | mlluizdevtech",
  description: "Conheça como trabalhamos: da análise inicial até o suporte pós-entrega. Processo transparente com entregas parciais e validação contínua.",
}

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Análise gratuita",
    duration: "1-2 dias",
    description: "Entendemos seu problema, objetivos e restrições. Analisamos viabilidade técnica e definimos escopo inicial.",
    deliverables: [
      "Reunião de descoberta (30-60min)",
      "Análise de viabilidade",
      "Estimativa de prazo e custo",
      "Proposta comercial detalhada",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Arquitetura e escopo",
    duration: "2-5 dias",
    description: "Definimos a arquitetura técnica, tecnologias, integrações e detalhamos cada funcionalidade do sistema.",
    deliverables: [
      "Documento de requisitos",
      "Arquitetura técnica",
      "Cronograma de sprints",
      "Contrato e início do projeto",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Desenvolvimento em sprints",
    duration: "1-2 semanas por sprint",
    description: "Construímos o sistema em ciclos curtos. Cada sprint entrega funcionalidades prontas para validação.",
    deliverables: [
      "Entregas parciais funcionais",
      "Demonstrações ao vivo",
      "Ajustes baseados em feedback",
      "Repositório com código fonte",
    ],
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testes e validação",
    duration: "Contínuo",
    description: "Testamos cada funcionalidade antes de entregar. Você valida e aprova antes de seguirmos adiante.",
    deliverables: [
      "Testes automatizados",
      "Testes de integração",
      "Validação de usuário",
      "Correções inclusas no escopo",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deploy",
    duration: "1-2 dias",
    description: "Colocamos seu sistema no ar em ambiente de produção, configurado e otimizado para performance.",
    deliverables: [
      "Deploy em produção",
      "Configuração de domínio e SSL",
      "Monitoramento básico",
      "Documentação de uso",
    ],
  },
  {
    number: "06",
    icon: HeadphonesIcon,
    title: "Suporte pós-entrega",
    duration: "30 dias inclusos",
    description: "Acompanhamos o sistema em produção, corrigimos bugs e ajudamos sua equipe a usar o sistema.",
    deliverables: [
      "30 dias de suporte incluso",
      "Correção de bugs",
      "Treinamento da equipe",
      "Planos de manutenção opcionais",
    ],
  },
]

const guarantees = [
  {
    title: "Transparência total",
    description: "Você acompanha cada etapa. Sem surpresas, sem custos escondidos.",
  },
  {
    title: "Ajustes sem custo extra",
    description: "Alterações dentro do escopo combinado são feitas sem cobrança adicional.",
  },
  {
    title: "Código é seu",
    description: "Entregamos o repositório completo. Você é dono do código fonte.",
  },
  {
    title: "Pagamento parcelado",
    description: "30-50% de entrada, restante em marcos de entrega ou parcelado.",
  },
]

export default function ProcessoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--canvas)] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-medium text-[var(--ink-deep)] leading-tight tracking-tight text-balance">
                Como trabalhamos
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--slate)] leading-relaxed text-pretty">
                Processo transparente, entregas parciais e validação contínua. Você acompanha cada etapa do desenvolvimento.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 md:py-24 bg-[var(--surface-soft)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-3xl p-6 md:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                    {/* Step Number & Icon */}
                    <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)] text-white">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div className="text-4xl font-bold text-[var(--hairline)]">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="lg:col-span-6">
                      <div className="inline-flex px-3 py-1 mb-3 text-xs font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-full">
                        {step.duration}
                      </div>
                      <h3 className="text-2xl font-semibold text-[var(--ink-deep)] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[var(--slate)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Deliverables */}
                    <div className="lg:col-span-4">
                      <div className="text-sm font-bold text-[var(--stone)] uppercase tracking-wider mb-3">
                        Entregas
                      </div>
                      <ul className="space-y-2">
                        {step.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[var(--ink)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex justify-center mt-8">
                      <div className="w-0.5 h-8 bg-[var(--hairline)]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-16 md:py-24 bg-[var(--canvas)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink-deep)] text-balance">
                Nossas garantias
              </h2>
              <p className="mt-4 text-lg text-[var(--slate)]">
                Trabalhamos com transparência e compromisso com o seu sucesso.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-[var(--surface-soft)] rounded-2xl text-center"
                >
                  <h3 className="text-lg font-semibold text-[var(--ink-deep)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--slate)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[var(--ink-deep)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--canvas)] text-balance">
                Pronto para começar?
              </h2>
              <p className="mt-4 text-lg text-[var(--stone)]">
                O primeiro passo é uma análise gratuita. Sem compromisso, sem custo.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-deep)] px-8 py-6 text-base font-bold"
                >
                  <Link href="/contato">
                    Solicitar análise gratuita
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
