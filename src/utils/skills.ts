import { ISkill, ISkillName } from '@/interfaces/skill'

export const skills: Record<ISkillName, ISkill> = {
  nodejs: {
    title: 'Node.js',
    color: 'bg-green-500',
  },
  postgresql: {
    title: 'PostgreSQL',
    color: 'bg-indigo-500',
  },
  docker: {
    title: 'Docker',
    color: 'bg-blue-500',
  },
  socketio: {
    title: 'Socket.io',
    color: 'bg-gray-500',
  },
  redis: {
    title: 'Redis',
    color: 'bg-red-500',
  },
  rabbitmq: {
    title: 'RabbitMQ',
    color: 'bg-orange-500',
  },
  typescript: {
    title: 'TypeScript',
    color: 'bg-blue-500',
  },
  html: {
    title: 'HTML',
    color: 'bg-red-500',
  },
  css: {
    title: 'CSS',
    color: 'bg-orange-500',
  },
  react: {
    title: 'React',
    color: 'bg-blue-500',
  },
  nextjs: {
    title: 'Next.js',
    color: 'bg-indigo-500',
  },
  git: {
    title: 'Git',
    color: 'bg-gray-500',
  },
}
