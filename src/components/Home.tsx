'use client'

import Image from 'next/image'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { RiMouseLine } from 'react-icons/ri'
import { Link as ScrollLink } from 'react-scroll'
import { Button } from '@/components/Button'

export const Home = () => {
  return (
    <section
      className="flex flex-col justify-between h-screen"
      id="home"
      onMouseEnter={() => alert('Ativar menu de inicio')}
    >
      <div className="flex justify-center items-center h-[100%]">
        <div className="flex flex-col items-center gap-8 mt-20">
          <Image
            src="/avatar3.png"
            className="rounded-full bg-slate-50 border-4"
            alt="Logo"
            width={130}
            height={130}
          />

          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-50">Claudio Rodrigo</h1>
            <p className="text-gray-50">Oi, sou um desenvolvedor backend.</p>
          </div>

          <div className="flex row gap-4">
            <a
              href="https://www.instagram.com/claudio_rodrigo_/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="text-4xl text-gray-50 hover:text-yellow-500 hover:cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/claudio-rodrigo-/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="text-4xl text-gray-50 hover:text-yellow-500 hover:cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/claudio-rodrigo-/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin className="text-4xl text-gray-50 hover:text-yellow-500 hover:cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/claudio-rodrigo-/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp className="text-4xl text-gray-50 hover:text-yellow-500 hover:cursor-pointer" />
            </a>
          </div>

          <div className="flex gap-5">
            <ScrollLink to="projects" smooth={true} duration={1000}>
              <Button text="Projetos" variant="light" />
            </ScrollLink>

            <ScrollLink to="about" smooth={true} duration={1000}>
              <Button text="Sobre mim" />
            </ScrollLink>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-5">
        <ScrollLink to="about" smooth={true} duration={1500}>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-gray-50">Rolar para baixo</span>
            <RiMouseLine className="text-4xl text-gray-50 hover:text-yellow-500 hover:cursor-pointer" />
          </div>
        </ScrollLink>
      </div>
    </section>
  )
}
