'use client'

import { Button } from '@/components/Button'
import Image from 'next/image'
import clsx from 'clsx'
import { projects } from '@/data/projects'
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
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-3 gap-8">
        {projects.slice(0, maxShowProjects).map((project, index) => (
          <div
            key={index}
            className={clsx(
              'container mx-auto my-auto flex flex-col items-center justify-center bg-white text-white',
              'gap-5 rounded-3xl p-8 shadow-xl',
              'col-span-full xl:col-span-1',
              project?.emphasis && 'xl:-rotate-3 xl:transform',
            )}
          >
            <Image
              src={project.image}
              alt="Projeto"
              width={180}
              height={180}
              className="max-h-12 w-auto"
            />

            <p className="text-center text-gray-400">{project.description}</p>

            <div className="flex flex-row items-center gap-8">
              {project?.urlGithub && (
                <a
                  className="cursor-pointer font-bold text-red-500"
                  href={project.urlGithub}
                  target="_blank"
                  rel="noreferrer"
                >
                  Código
                </a>
              )}

              <Link href={project.urlSite} target="_blank">
                <Button
                  text="Acessar"
                  variant={project?.emphasis ? 'primary' : 'secondary'}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <a
        className="cursor-pointer border-b-2 border-red-500 font-bold text-red-500"
        onClick={showMore ? handleShowLess : handleShowMore}
      >
        {showMore ? 'Ver menos' : 'Ver mais'}
      </a>
    </div>
  )
}
