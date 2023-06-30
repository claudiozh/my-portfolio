import { ISkill, ISkillName } from '@/interfaces/skill'

export const skills: Record<ISkillName, ISkill> = {
  nodejs: {
    title: 'Node.js',
    color: 'green',
  },
  postgresql: {
    title: 'PostgreSQL',
    color: 'indigo',
  },
  docker: {
    title: 'Docker',
    color: 'blue',
  },
  socketio: {
    title: 'Socket.io',
    color: 'gray',
  },
  redis: {
    title: 'Redis',
    color: 'red',
  },
  rabbitmq: {
    title: 'RabbitMQ',
    color: 'orange',
  },
  typescript: {
    title: 'TypeScript',
    color: 'blue',
  },
  html: {
    title: 'HTML',
    color: 'red',
  },
  css: {
    title: 'CSS',
    color: 'orange',
  },
  react: {
    title: 'React',
    color: 'blue',
  },
  nextjs: {
    title: 'Next.js',
    color: 'indigo',
  },
  git: {
    title: 'Git',
    color: 'gray',
  },
}
