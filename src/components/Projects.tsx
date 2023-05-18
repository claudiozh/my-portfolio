'use client'

import { Button } from '@/components/Button'
import Image from 'next/image'
import clsx from 'clsx'
import { projects } from '@/utils/projects'
import Link from 'next/link'
import { useState } from 'react'

const DEFAULT_SHOW_QUANTITY = 3

export const Projects = () => {
  const [maxShowProjects, setMaxShowProjects] = useState(DEFAULT_SHOW_QUANTITY)
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(true)
    setMaxShowProjects(projects.length)
  }

  const handleShowLess = () => {
    setShowMore(false)
    setMaxShowProjects(DEFAULT_SHOW_QUANTITY)
  }

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="grid grid-cols-3 gap-8">
        {projects.slice(0, maxShowProjects).map((project, index) => (
          <div
            key={index}
            className={clsx(
              'mx-auto my-auto container bg-white text-white flex flex-col items-center justify-center',
              'gap-5 p-8 rounded-3xl shadow-xl',
              'col-span-full xl:col-span-1',
              project?.emphasis && 'xl:transform xl:-rotate-3',
            )}
          >
            <Image
              src={project.image}
              alt="Logo"
              width={180}
              height={180}
              className="w-auto max-h-12"
            />

            <p className="text-gray-400 text-center">{project.description}</p>

            <Link href={project.url} target="_blank">
              <Button
                text="Acessar"
                variant={project?.emphasis ? 'primary' : 'secondary'}
              />
            </Link>
          </div>
        ))}
      </div>

      <a
        className="text-red-500 font-bold border-b-2 border-red-500 cursor-pointer"
        onClick={showMore ? handleShowLess : handleShowMore}
      >
        {showMore ? 'Ver menos' : 'Ver mais'}
      </a>
    </div>
  )
}
