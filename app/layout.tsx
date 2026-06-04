import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { MotionProvider } from '@/components/motion-provider'
import { LocalBusinessJsonLd } from '@/components/json-ld'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mlluizdevtech.com.br'),
  title: 'mlluizdevtech | Software House com IA e Automação',
  description: 'Software sob medida com automação e IA para acelerar seu negócio. Criamos sistemas web, apps mobile e automações com entrega rápida e custo acessível. MVP em até 30 dias.',
  keywords: ['desenvolvimento de sistemas', 'software house', 'automação com IA', 'MVP startup', 'aplicativo mobile', 'React Native', 'Next.js'],
  authors: [{ name: 'mlluizdevtech' }],
  creator: 'mlluizdevtech',
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'mlluizdevtech',
    title: 'mlluizdevtech | Software House com IA e Automação',
    description: 'A software house que usa IA para entregar sistemas em metade do tempo, pelo mesmo preço do mercado.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mlluizdevtech | Software House com IA e Automação',
    description: 'A software house que usa IA para entregar sistemas em metade do tempo.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#0064e0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Pular para o conteúdo principal
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionProvider>
            <LocalBusinessJsonLd />
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
