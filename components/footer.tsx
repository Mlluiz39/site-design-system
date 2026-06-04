import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  servicos: [
    { href: "/servicos#web", label: "Desenvolvimento Web" },
    { href: "/servicos#mobile", label: "Apps Mobile" },
    { href: "/servicos#backend", label: "Backends e APIs" },
    { href: "/servicos#ia", label: "Automação com IA" },
    { href: "/servicos#manutencao", label: "Manutenção" },
  ],
  empresa: [
    { href: "/sobre", label: "Sobre nós" },
    { href: "/portfolio", label: "Portfólio" },
    { href: "/processo", label: "Nosso Processo" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacidade", label: "Política de Privacidade" },
    { href: "/termos", label: "Termos de Uso" },
  ],
}

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "PostgreSQL",
  "Docker",
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--hairline-soft)] bg-[var(--canvas)]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-white font-bold text-sm">
                m
              </div>
              <span className="text-lg font-semibold text-[var(--ink-deep)]">
                mlluizdevtech
              </span>
            </Link>
            <p className="text-sm text-[var(--steel)] leading-relaxed">
              A software house que usa IA para entregar sistemas em metade do tempo, pelo mesmo preço do mercado.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium text-[var(--charcoal)] bg-[var(--surface-soft)] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold text-[var(--ink)] mb-4">
              Serviços
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--steel)] hover:text-[var(--ink-deep)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold text-[var(--ink)] mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--steel)] hover:text-[var(--ink-deep)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-bold text-[var(--ink)] mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@mlluizdevtech.com.br"
                  className="flex items-center gap-2 text-sm text-[var(--steel)] hover:text-[var(--ink-deep)] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contato@mlluizdevtech.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--steel)] hover:text-[var(--ink-deep)] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--steel)]">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Brasil - Atendimento remoto</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[var(--stone)]">
              Resposta em até 24h úteis
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--hairline-soft)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--stone)]">
              © {new Date().getFullYear()} mlluizdevtech. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[var(--stone)] hover:text-[var(--steel)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
