import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Little Nezha Academy - Fun Learning for Kids',
  description: 'A fun, interactive learning hub for kids with modules like Analog Clock Trainer, Math Lab, Language Explorer, and more exciting mini-games.',
  keywords: ['kids learning', 'education', 'interactive games', 'math', 'language', 'clock training', 'children education'],
  authors: [{ name: 'Little Nezha Academy' }],
  openGraph: {
    title: 'Little Nezha Academy - Fun Learning for Kids',
    description: 'Interactive learning hub for kids with fun educational games and modules',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
