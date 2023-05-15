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
  return (
    <div className="grid grid-cols-4 gap-10 justify-center mt-12">
      {Object.entries(skills).map(([key, skill]) => (
        <div
          key={key}
          className={clsx(
            'flex flex-col justify-center items-center gap-4 py-5 rounded-3xl shadow-md hover:-rotate-6',
            skill.color,
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
