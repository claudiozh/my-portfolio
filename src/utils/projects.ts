import { Project } from '@/interfaces/project'

export const projects: Project[] = [
  {
    description:
      'O AnyShare é um serviço que compartilhe códigos, comandos ou qualquer tipo de texto em tempo real.',
    image: '/anyshare.png',
    url: 'https://petshop-nodets.onrender.com/',
    emphasis: false,
  },
  {
    description:
      'O Encurtaki é um serviço de encurtamento de URLs que permite aos usuários transformar links longos em URLs curtas e fáceis de compartilhar. É uma ferramenta simples e eficiente que oferece uma maneira conveniente de encurtar URLs sem complicações.',
    image: '/encurtaki.png',
    url: 'https://encurtaki.me/',
    emphasis: true,
  },
  {
    description: `O Move.it é um app que utiliza a técnica de pomodoro, com períodos
    de trabalho de 25 minutos seguidos por intervalos curtos. A cada
    ciclo, os usuários recebem desafios para realizar.`,
    image: '/moveit.png',
    url: 'https://moveit-claudiozh.vercel.app/',
    emphasis: false,
  },
]
