import { Button } from '@/components/Button'
import Image from 'next/image'
import clsx from 'clsx'
import { projects } from '@/utils/projects'

export const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className={clsx(
            'mx-auto my-auto container bg-white text-white flex flex-col items-center justify-center',
            'gap-5 p-8 rounded-3xl shadow-xl',
            'col-span-full xl:col-span-1',
            project?.emphasis && 'xl:transform xl:-rotate-3',
          )}
        >
          <Image src={project.image} alt="Logo" width={200} height={200} />

          <p className="text-gray-400 text-center">{project.description}</p>

          <Button
            text="Acessar"
            variant={project?.emphasis ? 'primary' : 'secondary'}
          />
        </div>
      ))}
    </div>
  )
}
