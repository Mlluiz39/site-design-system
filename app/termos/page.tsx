import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Termos de Uso | mlluizdevtech",
  description: "Termos de uso do site da mlluizdevtech. Condições gerais de utilização de nossos serviços.",
}

export default function TermosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-[var(--canvas)] py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <h1 className="text-4xl font-medium text-[var(--ink-deep)] mb-8">
              Termos de Uso
            </h1>
            <p className="text-[var(--slate)] mb-4">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
            
            <div className="prose prose-lg max-w-none text-[var(--ink)]">
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Ao acessar e usar este site, você aceita e concorda em cumprir estes termos de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nosso site.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                2. Serviços
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                A mlluizdevtech oferece serviços de desenvolvimento de software, incluindo sistemas web, aplicativos mobile, backends e automações com IA. Os serviços específicos, prazos e valores são definidos em proposta comercial individual.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                3. Orçamentos e Propostas
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Os valores apresentados no site são referências. O orçamento final é definido após análise detalhada do escopo do projeto. Propostas comerciais têm validade de 15 dias, salvo indicação contrária.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                4. Propriedade Intelectual
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é de propriedade da mlluizdevtech ou licenciado para uso. É proibida a reprodução sem autorização prévia.
              </p>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Em relação aos projetos desenvolvidos: o código fonte é entregue ao cliente após pagamento integral, passando a ser de propriedade do contratante.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                5. Limitação de Responsabilidade
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                A mlluizdevtech não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso de nossos serviços, além do valor pago pelo serviço contratado.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                6. Confidencialidade
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Tratamos todas as informações do projeto como confidenciais. Podemos solicitar assinatura de NDA (Acordo de Confidencialidade) quando necessário.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                7. Alterações nos Termos
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas através do site.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                8. Foro
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será submetida ao foro da comarca de São Paulo/SP.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                9. Contato
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Dúvidas sobre estes termos podem ser enviadas para: contato@mlluizdevtech.com.br
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[var(--hairline-soft)]">
              <Link href="/" className="text-[var(--primary)] font-medium hover:underline">
                ← Voltar para Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
