"use client"

import Link from "next/link"
import { ArrowRight, Code, Smartphone, Server, Bot, Wrench, Layers, Zap, Clock, HeadphonesIcon, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  FadeInUp, 
  FadeInLeft, 
  FadeInRight, 
  ScaleIn, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard,
  GlowCard,
  FloatingElement,
  AnimatedLine
} from "@/components/animations"
import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/site-config"

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Sites e sistemas web modernos com React e Next.js. Responsivos, rápidos e otimizados para SEO.",
    href: "/servicos#web",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos Android e iOS com React Native. Uma única base de código para ambas plataformas.",
    href: "/servicos#mobile",
  },
  {
    icon: Server,
    title: "Backends e APIs",
    description: "APIs REST escaláveis com Node.js e PostgreSQL. Arquitetura limpa e documentação completa.",
    href: "/servicos#backend",
  },
  {
    icon: Bot,
    title: "Automação com IA",
    description: "Chatbots, pipelines de dados e integração com LLMs para automatizar processos do seu negócio.",
    href: "/servicos#ia",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Suporte contínuo, correções, atualizações de segurança e evolução do seu sistema.",
    href: "/servicos#manutencao",
  },
  {
    icon: Layers,
    title: "SaaS Personalizado",
    description: "Transformamos sua ideia em um produto SaaS completo, pronto para escalar e monetizar.",
    href: "/servicos#saas",
  },
]

const differentials = [
  {
    icon: Bot,
    title: "IA aplicada ao desenvolvimento",
    description: "Usamos automação e IA para reduzir tempo e custo sem abrir mão de qualidade.",
    metric: "Até 40% mais rápido",
  },
  {
    icon: Clock,
    title: "Entrega em sprints",
    description: "Entregas parciais a cada 1-2 semanas. Você valida antes de continuar.",
    metric: "MVP em 30 dias",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte pós-entrega",
    description: "30 dias de suporte incluso em todo projeto. Planos de manutenção a partir de R$100/mês.",
    metric: "SLA 24h úteis",
  },
]

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Go", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "Infra" },
  { name: "Cloudflare", category: "Infra" },
  { name: "React Native", category: "Mobile" },
]

const testimonials = [
  {
    quote: "A mlluizdevtech entregou nosso MVP em tempo recorde. O sistema funciona perfeitamente e já estamos captando clientes.",
    author: "Carlos Silva",
    role: "CEO, StartupXYZ",
  },
  {
    quote: "Finalmente conseguimos digitalizar nossos processos. O que era feito em planilhas agora está automatizado e integrado.",
    author: "Ana Costa",
    role: "Gestora, Clínica Saúde+",
  },
  {
    quote: "Preço justo, entrega rápida e suporte excelente. Recomendo para quem precisa de software de qualidade.",
    author: "Pedro Santos",
    role: "Proprietário, Loja Virtual",
  },
]

const stats = [
  { value: "50+", label: "Projetos entregues" },
  { value: "30", label: "Dias para MVP" },
  { value: "40%", label: "Mais barato" },
  { value: "24h", label: "Resposta" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[var(--canvas)] py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <FadeInUp>
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-[var(--charcoal)] bg-[var(--surface-soft)] rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <FloatingElement>
                    <Zap className="h-4 w-4 text-[var(--primary)]" />
                  </FloatingElement>
                  Software com IA e automação
                </motion.div>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--ink-deep)] leading-tight tracking-tight text-balance">
                  Software sob medida com automação e IA para acelerar seu negócio
                </h1>
              </FadeInUp>
              
              <FadeInUp delay={0.2}>
                <p className="mt-6 text-lg md:text-xl text-[var(--slate)] leading-relaxed text-pretty">
                  Criamos sistemas web, apps mobile e automações com entrega rápida e custo acessível. MVP em até 30 dias.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto rounded-full bg-[var(--ink-button)] text-[var(--on-ink-button)] hover:bg-[var(--charcoal)] px-8 py-6 text-base font-bold"
                    >
                      <Link href="/contato">
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto rounded-full border-2 border-[var(--ink-deep)] text-[var(--ink-deep)] hover:bg-[var(--surface-soft)] px-8 py-6 text-base font-bold"
                    >
                      <a
                        href={getWhatsAppUrl("general")}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </FadeInUp>
            </div>
          </div>
          
          {/* Animated background decoration */}
          <motion.div 
            className="absolute inset-0 -z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-[var(--primary)] opacity-[0.03] blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.03, 0.05, 0.03],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="bg-[var(--ink-deep)] py-12 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StaggerItem key={stat.label}>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-[var(--canvas)]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="mt-1 text-sm text-[var(--stone)]">
                      {stat.label}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-[var(--canvas)]" id="servicos">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <FadeInUp className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink-deep)] text-balance">
                Serviços que transformam seu negócio
              </h2>
              <p className="mt-4 text-lg text-[var(--slate)] max-w-2xl mx-auto">
                Do desenvolvimento ao suporte, entregamos soluções completas para digitalizar e automatizar sua empresa.
              </p>
            </FadeInUp>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <StaggerItem key={service.title}>
                  <GlowCard>
                    <Link
                      href={service.href}
                      className="group block p-6 md:p-8 bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-3xl hover:border-[var(--hairline)] transition-all h-full"
                    >
                      <motion.div 
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--primary)] mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <service.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-[var(--ink-deep)] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[var(--slate)] leading-relaxed">
                        {service.description}
                      </p>
                      <motion.div 
                        className="mt-4 flex items-center text-sm font-bold text-[var(--primary)]"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Saiba mais
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </Link>
                  </GlowCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-16 md:py-24 bg-[var(--surface-soft)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <FadeInUp className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink-deep)] text-balance">
                Por que escolher a mlluizdevtech
              </h2>
              <p className="mt-4 text-lg text-[var(--slate)] max-w-2xl mx-auto">
                Combinamos tecnologia de ponta com processos ágeis para entregar mais rápido e mais barato.
              </p>
            </FadeInUp>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentials.map((diff, index) => (
                <FadeInUp key={diff.title} delay={index * 0.1}>
                  <AnimatedCard>
                    <div className="p-6 md:p-8 bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-3xl h-full">
                      <motion.div 
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] text-white mb-4"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <diff.icon className="h-6 w-6" />
                      </motion.div>
                      <motion.div 
                        className="inline-flex px-3 py-1 mb-3 text-xs font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {diff.metric}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-[var(--ink-deep)] mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-[var(--slate)] leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </AnimatedCard>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 md:py-24 bg-[var(--canvas)] overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <FadeInUp className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink-deep)] text-balance">
                Tecnologias que usamos
              </h2>
              <p className="mt-4 text-lg text-[var(--slate)]">
                Stack moderna e consolidada para garantir qualidade e escalabilidade.
              </p>
            </FadeInUp>
            
            <StaggerContainer className="flex flex-wrap items-center justify-center gap-4">
              {technologies.map((tech, index) => (
                <StaggerItem key={tech.name}>
                  <motion.div
                    className="flex items-center gap-2 px-5 py-3 bg-[var(--surface-soft)] border border-[var(--hairline-soft)] rounded-full cursor-default"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "var(--primary)",
                      color: "white",
                      borderColor: "var(--primary)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-bold text-[var(--ink-deep)]">
                      {tech.name}
                    </span>
                    <span className="text-xs text-[var(--stone)]">
                      {tech.category}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-[var(--surface-soft)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <FadeInUp className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink-deep)] text-balance">
                O que nossos clientes dizem
              </h2>
            </FadeInUp>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <FadeInUp key={index} delay={index * 0.15}>
                  <AnimatedCard className="h-full">
                    <div className="p-6 md:p-8 bg-[var(--canvas)] border border-[var(--hairline-soft)] rounded-3xl h-full flex flex-col">
                      <motion.div 
                        className="flex gap-1 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className="h-5 w-5 text-[var(--warning)]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.05 }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </motion.div>
                      <p className="text-[var(--ink)] leading-relaxed mb-6 flex-1">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div>
                        <div className="font-bold text-[var(--ink-deep)]">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-[var(--steel)]">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[var(--ink-deep)] relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 left-0 w-64 h-64 bg-[var(--primary)] rounded-full opacity-10 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full opacity-10 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <ScaleIn>
                <h2 className="text-3xl md:text-4xl font-medium text-[var(--canvas)] text-balance">
                  Pronto para transformar sua ideia em realidade?
                </h2>
              </ScaleIn>
              
              <FadeInUp delay={0.2}>
                <p className="mt-4 text-lg text-[var(--stone)]">
                  Solicite uma análise gratuita do seu projeto e receba um orçamento sem compromisso.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-deep)] px-8 py-6 text-base font-bold"
                    >
                      <Link href="/contato">
                        Solicitar Análise Gratuita
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto rounded-full border-2 border-[var(--canvas)] text-[var(--canvas)] bg-transparent hover:bg-white/10 px-8 py-6 text-base font-bold"
                    >
                      <Link href="/portfolio">
                        Ver Portfólio
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.4}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--stone)]">
                  {[
                    { text: "Resposta em 24h" },
                    { text: "Sem compromisso" },
                    { text: "Orçamento detalhado" }
                  ].map((item, index) => (
                    <motion.span 
                      key={item.text}
                      className="flex items-center gap-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[var(--success)]" />
                      {item.text}
                    </motion.span>
                  ))}
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
