import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Claudio Rodrigo',
  description: 'Site pessoal de Claudio Rodrigo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
