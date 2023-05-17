import { skills } from '@/utils/skills'
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

export const iconByName: Record<ISkillName, React.JSX.Element> = {
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
    <div className="grid grid-cols-4 gap-6 justify-center">
      {Object.entries(skills).map(([key, skill]) => (
        <div
          key={key}
          className={clsx(
            'col-span-2 md:col-span-1 flex flex-col justify-center items-center gap-4 py-5 rounded-3xl shadow-md hover:-rotate-6',
            colorVariants[skill.color as keyof typeof colorVariants],
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
