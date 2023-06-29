import Image from 'next/image'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { pathImages } from '@/utils/path-images'
import { SkillProgressBar } from '@/components/SkillProgressBar'

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
      <Image
        src={pathImages.avatar4}
        alt="Avatar"
        className="border-4 rounded-full"
        width={160}
        height={160}
      />

      <div className=" bg-white shadow-xl p-8 rounded-3xl">
        <div className="relative">
          <div
            className={clsx(
              'absolute flex items-center justify-center',
              'w-0 h-0 left-[50%] md:left-[-50px] top-[-50px] md:top-0',
              'bottom-full transform translate-x-[-50%]',
            )}
          >
            <div
              className={clsx(
                'border-t-[20px] border-t-transparent',
                'border-r-[20px] border-r-transparent md:border-r-white',
                'border-l-[20px] border-l-transparent',
                'border-b-[20px] border-b-white md:border-b-transparent ',
                'md:mt-24',
              )}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-8 mb-8">
          <div className="col-span-full xl:col-span-4 text-gray-600 text-lg">
            <p>
              Olá, meu nome é Claudio e sou um desenvolvedor backend com
              experiência em projetos que utilizam Node.js e seus frameworks
              associados, incluindo Express, Fastify e NestJS. Além disso, já
              trabalhei em projetos front-end, utilizando ferramentas como ExtJS
              e ReactJS.
            </p>
          </div>

          <div className="col-span-full xl:col-span-2 flex flex-col gap-8">
            <SkillProgressBar skill="Dev backend" percentage={80} />
            <SkillProgressBar skill="Dev frontend" percentage={20} />
          </div>
        </div>

        <Button text="Download csv" />
      </div>
    </div>
  )
}
