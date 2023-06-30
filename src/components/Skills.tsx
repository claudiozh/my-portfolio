import { skills } from '@/data/skills'
import React from 'react'
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import {
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiRabbitmq,
  SiSocketdotio,
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { ISkillName } from '@/interfaces/skill'
import clsx from 'clsx'

const iconByName: Record<ISkillName, React.JSX.Element> = {
  nodejs: <FaNodeJs />,
  postgresql: <SiPostgresql />,
  docker: <SiDocker />,
  redis: <SiRedis />,
  rabbitmq: <SiRabbitmq />,
  socketio: <SiSocketdotio />,
  typescript: <TbBrandTypescript />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  react: <FaReact />,
  nextjs: <TbBrandNextjs />,
  git: <FaGitAlt />,
}

export const Skills = () => {
  const colorVariants = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    gray: 'bg-gray-500',
    indigo: 'bg-indigo-500',
  }

  return (
    <div className="grid grid-cols-4 justify-center gap-6">
      {Object.entries(skills).map(([key, skill]) => (
        <div
          key={key}
          className={clsx(
            'col-span-2 flex flex-col items-center justify-center gap-4 rounded-3xl py-5 shadow-md hover:-rotate-6 md:col-span-1',
            colorVariants[skill.color as keyof typeof colorVariants] || '',
          )}
        >
          <div className="text-7xl text-gray-50">
            {iconByName[key as ISkillName]}
          </div>
          <div className="text-lg font-bold text-gray-50">{skill.title}</div>
        </div>
      ))}
    </div>
  )
}
