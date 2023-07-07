import { ISkill, ISkillName } from '@/interfaces/skill'

export const skills: Record<ISkillName, ISkill> = {
  nodejs: {
    title: 'NodeJS',
    color: 'green',
  },
  express: {
    title: 'Express',
    color: 'slate',
  },
  fastify: {
    title: 'Fastify',
    color: 'neutral',
  },
  nestjs: {
    title: 'NestJS',
    color: 'red',
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
  extjs: {
    title: 'ExtJS',
    color: 'blue',
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
