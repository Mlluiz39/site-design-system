import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidade | mlluizdevtech",
  description: "Política de privacidade da mlluizdevtech. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
}

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-[var(--canvas)] py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <h1 className="text-4xl font-medium text-[var(--ink-deep)] mb-8">
              Política de Privacidade
            </h1>
            <p className="text-[var(--slate)] mb-4">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
            
            <div className="prose prose-lg max-w-none text-[var(--ink)]">
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                1. Introdução
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                A mlluizdevtech está comprometida em proteger a privacidade dos usuários de nosso site. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                2. Dados Coletados
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Coletamos as seguintes informações quando você utiliza nosso formulário de contato:
              </p>
              <ul className="list-disc pl-6 text-[var(--slate)] space-y-2 mb-4">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone (opcional)</li>
                <li>Nome da empresa (opcional)</li>
                <li>Informações sobre seu projeto</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                3. Uso dos Dados
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 text-[var(--slate)] space-y-2 mb-4">
                <li>Responder suas solicitações de contato</li>
                <li>Enviar propostas comerciais</li>
                <li>Comunicar sobre andamento de projetos</li>
                <li>Melhorar nossos serviços</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                4. Compartilhamento de Dados
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a prestação de nossos serviços ou quando exigido por lei.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                5. Segurança
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                6. Cookies
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Utilizamos cookies para melhorar sua experiência de navegação e coletar dados analíticos anônimos. Você pode configurar seu navegador para recusar cookies.
              </p>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                7. Seus Direitos
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc pl-6 text-[var(--slate)] space-y-2 mb-4">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[var(--ink-deep)] mt-8 mb-4">
                8. Contato
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail: contato@mlluizdevtech.com.br
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
