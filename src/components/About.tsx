import Image from 'next/image'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { pathImages } from '@/utils/path-images'
import { SkillProgressBar } from '@/components/SkillProgressBar'

export const About = () => {
  return (
    <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
      <Image
        src={pathImages.avatar4}
        alt="Avatar"
        className="rounded-full border-4"
        width={160}
        height={160}
      />

      <div className=" rounded-3xl bg-white p-8 shadow-xl">
        <div className="relative">
          <div
            className={clsx(
              'absolute flex items-center justify-center',
              'left-[50%] top-[-50px] h-0 w-0 md:left-[-50px] md:top-0',
              'bottom-full translate-x-[-50%] transform',
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

        <div className="mb-8 grid grid-cols-6 gap-8">
          <div className="col-span-full text-lg text-gray-600 xl:col-span-4">
            <p>
              Olá, meu nome é Claudio e sou um desenvolvedor
              <strong> backend</strong> com experiência em projetos que utilizam
              <strong> NodeJS</strong> e seus frameworks associados, incluindo
              <strong> Express, Fastify</strong> e<strong> NestJS</strong>. Além
              disso, já trabalhei em projetos<strong> frontend </strong>
              utilizando
              <strong> ExtJS </strong> e <strong> ReactJS</strong>.
            </p>
          </div>

          <div className="col-span-full flex flex-col gap-8 xl:col-span-2">
            <SkillProgressBar skill="Dev backend" percentage={80} />
            <SkillProgressBar skill="Dev frontend" percentage={20} />
          </div>
        </div>

        <Button text="Download csv" />
      </div>
    </div>
  )
}
