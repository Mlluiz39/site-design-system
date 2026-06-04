import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'mlluizdevtech | Software House com IA e Automacao',
  description: 'Software sob medida com automacao e IA para acelerar seu negocio. Criamos sistemas web, apps mobile e automacoes com entrega rapida e custo acessivel. MVP em ate 30 dias.',
  keywords: ['desenvolvimento de sistemas', 'software house', 'automacao com IA', 'MVP startup', 'aplicativo mobile', 'React Native', 'Next.js'],
  authors: [{ name: 'mlluizdevtech' }],
  creator: 'mlluizdevtech',
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'mlluizdevtech',
    title: 'mlluizdevtech | Software House com IA e Automacao',
    description: 'A software house que usa IA para entregar sistemas em metade do tempo, pelo mesmo preco do mercado.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mlluizdevtech | Software House com IA e Automacao',
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
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
