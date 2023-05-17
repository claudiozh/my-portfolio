import { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Claudio Rodrigo',
  description: 'Portfólio de Claudio Rodrigo',
  themeColor: '#1C2948',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
