import Image from 'next/image'
import { Button } from '@/components/Button'
import { ProgressBar } from '@/components/ProgressBar'

type Props = {
  language: string
  percentage: number
}

export const About = () => {
  const Stack = ({ language, percentage }: Props) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-8">
          <p className="text-gray-600 text-lg">{language}</p>
          <p>{percentage}%</p>
        </div>

        <ProgressBar percentage={percentage} />
      </div>
    )
  }

  return (
    <div className="flex items-center mt-12 gap-10">
      <Image
        src="/avatar4.png"
        className="rounded-full border-4"
        alt="Logo"
        width={160}
        height={160}
      />
      <div className="bg-white grid grid-cols-12 gap-8 shadow-xl p-8 rounded-3xl">
        <div className="col-span-7 text-gray-600 text-lg">
          <div className="relative">
            <div className="absolute w-0 h-0 left-[-52px] bottom-full transform translate-x-[-50%]">
              <div className="mt-12 border-t-[20px] border-t-transparent border-r-white border-r-[20px]  border-b-[20px] border-b-transparent"></div>
            </div>

            <p className="mb-10">
              Olá, meu nome é Claudio e sou um desenvolvedor backend com
              experiência em projetos que utilizam Node.js e seus frameworks
              associados, incluindo Express, Fastify e Next.js. Além disso, já
              trabalhei em projetos front-end, utilizando ferramentas como ExtJS
              e ReactJS.
            </p>
          </div>

          <Button text="Download csv" />
        </div>

        <div className="col-span-5 flex flex-col gap-8">
          <Stack language="Dev backend" percentage={80} />
          <Stack language="Dev frontend" percentage={20} />
        </div>
      </div>
    </div>
  )
}
