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
  applicationName: title,
  metadataBase: new URL(
    'https://cdn.discordapp.com/attachments/941065332502720602/1108851050808623195/og-image.png',
  ),
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images:
      'https://cdn.discordapp.com/attachments/941065332502720602/1108851050808623195/og-image.png',
    title,
    description,
  },
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: 'My Website',
    description: 'My Website Description',
    siteName: 'My Website',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/941065332502720602/1108851050808623195/og-image.png',
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

// # Portfolio - Claudio Rodrigo 👨‍💻

// Olá! Bem-vindo ao meu portfolio no GitHub. Sou Claudio Rodrigo, um desenvolvedor backend com experiência em projetos que utilizam Node.js e seus frameworks associados, como Express, Fastify e NestJS. Também tenho experiência em projetos front-end, trabalhando com ferramentas como ExtJS e ReactJS.

// 🚀 Este portfolio é uma coleção dos meus projetos mais recentes e representa meu trabalho e habilidades como desenvolvedor. Aqui você encontrará uma variedade de projetos, desde APIs RESTful até aplicações web completas.

// 💡 Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades de desenvolvimento. Sinta-se à vontade para explorar meus projetos e entrar em contato comigo caso queira colaborar ou tenha alguma pergunta.

// 🙌 Obrigado por visitar meu portfolio e espero que você encontre algo interessante aqui!
