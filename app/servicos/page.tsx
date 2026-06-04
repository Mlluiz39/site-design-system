import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code, Smartphone, Server, Bot, Wrench, Layers, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Serviços | mlluizdevtech",
  description: "Desenvolvimento web, apps mobile, backends, automação com IA e manutenção de sistemas. Conheça nossos serviços de software sob medida.",
}

const services = [
  {
    id: "web",
    icon: Code,
    title: "Desenvolvimento Web",
    subtitle: "Sites e sistemas web modernos",
    description: "Criamos aplicações web completas, desde landing pages até sistemas complexos com painéis administrativos. Usamos React e Next.js para garantir performance, SEO e experiência do usuário.",
    features: [
      "Sites institucionais responsivos",
      "Sistemas web com painel admin",
      "E-commerce e lojas virtuais",
      "Dashboards e relatórios",
      "Integrações com APIs externas",
      "SEO e otimização de performance",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    priceRange: "A partir de R$ 2.000",
    timeline: "1 a 8 semanas",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Apps Mobile",
    subtitle: "Android e iOS com React Native",
    description: "Desenvolvemos aplicativos nativos para Android e iOS usando uma única base de código. Isso reduz custos e tempo de desenvolvimento, mantendo qualidade e performance.",
    features: [
      "Apps Android e iOS",
      "Interface nativa e fluida",
      "Notificações push",
      "Integração com câmera e GPS",
      "Publicação nas lojas",
      "Atualizações OTA",
    ],
    technologies: ["React Native", "Expo", "TypeScript"],
    priceRange: "A partir de R$ 8.000",
    timeline: "4 a 10 semanas",
  },
  {
    id: "backend",
    icon: Server,
    title: "Backends e APIs",
    subtitle: "APIs REST escaláveis",
    description: "Construímos a infraestrutura que faz seu sistema funcionar. APIs robustas, seguras e bem documentadas, prontas para escalar conforme seu negócio cresce.",
    features: [
      "APIs REST documentadas",
      "Autenticação e autorização",
      "Integração com bancos de dados",
      "Webhooks e filas",
      "Cache e otimização",
      "Deploy em cloud",
    ],
    technologies: ["Node.js", "Go", "PostgreSQL", "Docker"],
    priceRange: "A partir de R$ 5.000",
    timeline: "2 a 6 semanas",
  },
  {
    id: "ia",
    icon: Bot,
    title: "Automação com IA",
    subtitle: "Chatbots e pipelines inteligentes",
    description: "Automatizamos processos repetitivos do seu negócio usando inteligência artificial. Chatbots para atendimento, processamento de documentos, geração de relatórios e muito mais.",
    features: [
      "Chatbots com IA",
      "Processamento de documentos",
      "Extração de dados",
      "Relatórios automáticos",
      "Integração com LLMs",
      "Pipelines de dados",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "Node.js"],
    priceRange: "A partir de R$ 3.000",
    timeline: "2 a 6 semanas",
  },
  {
    id: "manutencao",
    icon: Wrench,
    title: "Manutenção de Sistemas",
    subtitle: "Suporte contínuo e evolução",
    description: "Mantemos seu sistema funcionando perfeitamente. Correções de bugs, atualizações de segurança, novas funcionalidades e suporte técnico com SLA definido.",
    features: [
      "Correções de bugs",
      "Atualizações de segurança",
      "Novas funcionalidades",
      "Monitoramento 24/7",
      "Backups automáticos",
      "SLA de 24h úteis",
    ],
    technologies: ["Todas as stacks que trabalhamos"],
    priceRange: "A partir de R$ 500/mês",
    timeline: "Contrato mínimo de 3 meses",
  },
  {
    id: "saas",
    icon: Layers,
    title: "SaaS Personalizado",
    subtitle: "Do MVP ao produto completo",
    description: "Transformamos sua ideia em um produto SaaS pronto para o mercado. Desde a validação do MVP até a versão escalável, com arquitetura multi-tenant e integração de pagamentos.",
    features: [
      "Validação de MVP",
      "Arquitetura multi-tenant",
      "Sistema de assinaturas",
      "Integração com pagamentos",
      "Métricas e analytics",
      "Escalabilidade garantida",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    priceRange: "A partir de R$ 10.000",
    timeline: "4 a 12 semanas",
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--canvas)] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-medium text-[var(--ink-deep)] leading-tight tracking-tight text-balance">
                Serviços de desenvolvimento
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--slate)] leading-relaxed text-pretty">
                Do site institucional ao sistema complexo, entregamos soluções completas com qualidade e preço justo.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24 bg-[var(--surface-soft)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="space-y-12 md:space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-3xl p-6 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                      {/* Content */}
                      <div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-white mb-6">
                          <service.icon className="h-7 w-7" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink-deep)] mb-2">
                          {service.title}
                        </h2>
                        <p className="text-lg text-[var(--primary)] font-medium mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-[var(--slate)] leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-[var(--ink)]">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium text-[var(--charcoal)] bg-[var(--surface-soft)] rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pricing Card */}
                      <div className="bg-[var(--surface-soft)] rounded-2xl p-6 md:p-8 flex flex-col">
                        <div className="flex-1">
                          <div className="mb-6">
                            <div className="text-sm text-[var(--steel)] mb-1">Investimento</div>
                            <div className="text-2xl font-bold text-[var(--ink-deep)]">
                              {service.priceRange}
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="text-sm text-[var(--steel)] mb-1">Prazo estimado</div>
                            <div className="text-lg font-semibold text-[var(--ink)]">
                              {service.timeline}
                            </div>
                          </div>
                          <p className="text-sm text-[var(--stone)]">
                            Valores de referência. Orçamento final definido após análise gratuita do escopo.
                          </p>
                        </div>
                        <div className="mt-6 pt-6 border-t border-[var(--hairline-soft)]">
                          <Button
                            asChild
                            className="w-full rounded-full bg-[var(--ink-button)] text-[var(--on-ink-button)] hover:bg-[var(--charcoal)]"
                          >
                            <Link href={`/contato?servico=${service.id}`}>
                              Solicitar orçamento
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                Não encontrou o que precisa?
              </h2>
              <p className="mt-4 text-lg text-[var(--stone)]">
                Desenvolvemos soluções sob medida. Conte-nos seu desafio e criamos a solução ideal.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-deep)] px-8 py-6 text-base font-bold"
                >
                  <Link href="/contato">
                    Falar com especialista
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full border-2 border-[var(--canvas)] text-[var(--canvas)] bg-transparent hover:bg-white/10 px-8 py-6 text-base font-bold"
                >
                  <a
                    href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Preciso%20de%20uma%20solu%C3%A7%C3%A3o%20personalizada."
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
