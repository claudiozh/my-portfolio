import { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

const title = 'Portfolio - Claudio Rodrigo'
const description =
  'Desenvolvedor backend com experiência em projetos que utilizam Node.js e seus frameworks associados, incluindo Express, Fastify e NestJS. Além disso, já trabalhei em projetos front-end, utilizando ferramentas como ExtJS e ReactJS.'

export const metadata: Metadata = {
  title,
  description,
  themeColor: '#1C2948',

  openGraph: {
    title,
    description,
    type: 'website',
  },
  twitter: {
    title,
    description,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  )
}
