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
  {
    description:
      'O PetDevShop é um sistema desenvolvido em Typescript, CSS e HTML, que oferece aos usuários a capacidade de listar animais e aplicar filtros.',
    image: '/petshop.png',
    url: 'https://petshop-nodets.onrender.com/',
    emphasis: false,
  },
  {
    description:
      'O React Calc IMC é uma calculadora de IMC desenvolvida em React. O IMC é uma medida utilizada para calcular se uma pessoa está no peso ideal.',
    image: '/calculator.png',
    url: 'https://react-calc-imc-claudiozh.vercel.app/',
    emphasis: false,
  },
]
