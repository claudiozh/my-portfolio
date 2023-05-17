import { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Claudio Rodrigo',
  description: 'Portfólio de Claudio Rodrigo',
  themeColor: '#1C2948',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  )
}
