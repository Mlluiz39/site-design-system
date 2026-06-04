import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Lightbulb, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Sobre | mlluizdevtech",
  description: "Conheça a mlluizdevtech - software house focada em automação e IA para entregar sistemas mais rápidos e baratos sem abrir mão de qualidade técnica.",
}

const values = [
  {
    icon: Target,
    title: "Foco em resultados",
    description: "Entregamos software que resolve problemas reais. Sem tecnologia por tecnologia, apenas soluções práticas.",
  },
  {
    icon: Lightbulb,
    title: "Inovação constante",
    description: "Usamos IA e automação para fazer mais com menos, repassando a economia para nossos clientes.",
  },
  {
    icon: Users,
    title: "Parceria genuína",
    description: "Trabalhamos lado a lado com você. Seu sucesso é o nosso sucesso.",
  },
  {
    icon: Rocket,
    title: "Agilidade responsável",
    description: "Entregamos rápido, mas nunca sacrificamos qualidade. Código limpo, documentado e escalável.",
  },
]

const timeline = [
  {
    year: "2022",
    title: "Início da jornada",
    description: "Começamos como freelancers especializados em React e Node.js, atendendo pequenas empresas locais.",
  },
  {
    year: "2023",
    title: "Adoção de IA",
    description: "Integramos ferramentas de IA ao nosso fluxo de trabalho, aumentando produtividade em 40%.",
  },
  {
    year: "2024",
    title: "Formalização",
    description: "Nasceu a mlluizdevtech como software house, com processos estruturados e foco em PMEs e startups.",
  },
  {
    year: "2025",
    title: "Expansão",
    description: "Ampliamos para apps mobile e automações complexas, atendendo clientes em todo o Brasil.",
  },
]

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--canvas)] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-medium text-[var(--ink-deep)] leading-tight tracking-tight text-balance">
                Engenharia de software com IA
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--slate)] leading-relaxed text-pretty">
                A mlluizdevtech nasceu da crença de que tecnologia deve ser acessível. Usamos automação e IA para entregar sistemas melhores, mais rápidos e mais baratos.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-[var(--surface-soft)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex px-4 py-2 mb-4 text-sm font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-full">
                  Nossa missão
                </div>
                <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink-deep)] text-balance mb-6">
                  Democratizar o acesso a software de qualidade
                </h2>
                <p className="text-lg text-[var(--slate)] leading-relaxed mb-6">
                  Acreditamos que toda empresa merece ter sistemas modernos e eficientes, independente do tamanho ou orçamento. Por isso, usamos tecnologia para reduzir custos sem comprometer qualidade.
                </p>
                <p className="text-lg text-[var(--slate)] leading-relaxed">
                  Com IA aplicada ao desenvolvimento, conseguimos automatizar tarefas repetitivas, gerar código mais rápido e focar no que realmente importa: resolver o problema do cliente.
                </p>
              </div>
              <div className="bg-[var(--ink-deep)] p-8 md:p-12 rounded-3xl text-center">
                <blockquote className="text-2xl md:text-3xl font-light text-[var(--canvas)] leading-relaxed italic">
                  &quot;Menos custo, mais eficiência&quot;
                </blockquote>
                <p className="mt-6 text-[var(--stone)]">
                  Nossa filosofia de trabalho
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-[var(--canvas)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink-deep)] text-balance">
                Nossos valores
              </h2>
              <p className="mt-4 text-lg text-[var(--slate)] max-w-2xl mx-auto">
                Os princípios que guiam cada projeto e decisão na mlluizdevtech.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 md:p-8 bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-3xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] text-white mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--ink-deep)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[var(--slate)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-[var(--surface-soft)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink-deep)] text-balance">
                Nossa trajetória
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white font-bold text-sm">
                        {item.year}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 flex-1 bg-[var(--hairline)] mt-4" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-[var(--ink-deep)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[var(--slate)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[var(--ink-deep)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--canvas)] text-balance">
                Vamos construir algo juntos?
              </h2>
              <p className="mt-4 text-lg text-[var(--stone)]">
                Conte-nos sobre seu projeto e descubra como podemos ajudar.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-deep)] px-8 py-6 text-base font-bold"
                >
                  <Link href="/contato">
                    Entrar em contato
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
