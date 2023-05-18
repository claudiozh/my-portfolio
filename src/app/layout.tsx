import { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

const title = 'Portfolio - Claudio Rodrigo'
const description =
  'Desenvolvedor backend com experiência em projetos que utilizam Node.js e seus frameworks associados, incluindo Express, Fastify e NestJS. Além disso, já trabalhei em projetos front-end, utilizando ferramentas como ExtJS e ReactJS.'
const ogImage = 'https://portfolio-claudiozh.vercel.app/images/og-image.png'

export const metadata: Metadata = {
  title,
  description,
  themeColor: '#1C2948',
  applicationName: title,
  metadataBase: new URL(ogImage),
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: ogImage,
    title,
    description,
  },
  openGraph: {
    type: 'website',
    title,
    description,
    siteName: title,
    images: [
      {
        url: ogImage,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  )
}
