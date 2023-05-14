'use client'

import Image from 'next/image'
import { BiUserCheck } from 'react-icons/bi'
import { Button } from '@/components/Button'

export const About = () => {
  return (
    <section
      className="flex flex-col justify-between p-20 border border-red-500"
      id="about"
    >
      <BiUserCheck className="text-gray-600 opacity-10 text-5xl mb-[-30px] ml-[-25px]" />
      <h1 className="text-4xl font-bold text-gray-600">Sobre mim</h1>

      <div className="flex items-center mt-12 gap-6">
        <Image
          src="/avatar4.png"
          className="rounded-full border-4"
          alt="Logo"
          width={160}
          height={160}
        />

        <div className="bg-white flex flex-1 justify-between gap-8 shadow-xl p-8 rounded-3xl">
          <div className="relative mt-12">
            <div className="absolute w-0 h-0 left-[-52px] bottom-full transform translate-x-[-50%] border border-red">
              <div className="border-t-[20px] border-t-transparent border-r-white border-r-[20px]  border-b-[20px] border-b-transparent"></div>
            </div>
          </div>

          <div className="flex-1 text-gray-600 text-lg">
            <p className="mb-10">
              Olá, meu nome é Claudio e sou um desenvolvedor backend com
              experiência em projetos que utilizam Node.js e seus frameworks
              associados, incluindo Express, Fastify e Next.js. Além disso, já
              trabalhei em projetos front-end, utilizando ferramentas como Extjs
              e Reactjs.
            </p>

            <Button text="Download csv" />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between gap-8">
                <p className='text-gray-600 text-lg"'>Dev backend</p>
                <p>80%</p>
              </div>
              <div className="bg-gray-200 h-2 rounded">
                <div className="bg-indigo-500 w-[80%] h-full rounded"></div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className='text-gray-600 text-lg"'>Dev frontend</p>
                <p>20%</p>
              </div>
              <div className="bg-gray-200 h-2 rounded">
                <div className="bg-red-500 w-[20%] h-full rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
