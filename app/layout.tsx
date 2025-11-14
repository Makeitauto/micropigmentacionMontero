import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const interDisplay = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Microcapilar Montero | Micropigmentación Premium con Precisión Médica',
  description: 'Micropigmentación avanzada con precisión médica. Resultados naturales, tecnología de élite y excelencia certificada. Cejas, labios, capilar y corrección de cicatrices.',
  keywords: 'micropigmentación, microblading, powder brows, micropigmentación capilar, SMP, aquacolor lip',
  openGraph: {
    title: 'Microcapilar Montero | Micropigmentación Premium',
    description: 'Micropigmentación avanzada con precisión médica. Resultados naturales y tecnología de élite.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${interDisplay.variable} font-body`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

