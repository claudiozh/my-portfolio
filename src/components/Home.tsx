'use client'

import Image from 'next/image'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import { RiMouseLine } from 'react-icons/ri'
import { Link as ScrollLink } from 'react-scroll'
import { Button } from '@/components/Button'
import { ids } from '@/utils/navlinks'
import { pathImages } from '@/utils/path-images'

const socialMedia = [
  {
    id: 'github',
    url: 'https://github.com/claudiozh',
    icon: <AiOutlineGithub />,
  },
  {
    id: 'instagram',
    url: 'https://www.instagram.com/claudiorodrigozh',
    icon: <AiOutlineInstagram />,
  },
  {
    id: 'linkedin',
    url: 'https://br.linkedin.com/in/claudio-rodrigo-medeiros-515755127',
    icon: <AiOutlineLinkedin />,
  },
]

export const Home = () => {
  return (
    <div className="w-full bg-primary">
      <div className="md:container md:mx-auto">
        <div className="flex flex-col justify-between h-screen">
          <div className="flex justify-center items-center h-[100%]">
            <div className="flex flex-col items-center gap-8 mt-20">
              <Image
                src={pathImages.avatar3}
                className="rounded-full bg-slate-50 border-4"
                alt="Logo"
                width={130}
                height={130}
              />

              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-gray-50">
                  Claudio Rodrigo
                </h1>
                <p className="text-gray-50">
                  Oi, sou um desenvolvedor backend.
                </p>
              </div>

              <div className="flex gap-4">
                {socialMedia.map((social) => (
                  <a
                    href={social.url}
                    key={social.id}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-4xl text-gray-50 hover:text-yellow-500 hover:cursor-pointer">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex gap-5">
                <ScrollLink to={ids.projects} smooth={true} duration={1000}>
                  <Button text="Projetos" variant="light" />
                </ScrollLink>

                <ScrollLink to={ids.about} smooth={true} duration={1000}>
                  <Button text="Sobre mim" />
                </ScrollLink>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mb-5">
            <ScrollLink to={ids.about} smooth={true} duration={1500}>
              <div className="flex flex-col justify-center items-center gap-2">
                <span className="text-gray-50 hover:text-yellow-500 hover:cursor-pointer">
                  Rolar para baixo
                </span>
                <RiMouseLine className="text-4xl text-gray-50 hover:text-yellow-500 hover:cursor-pointer" />
              </div>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  )
}
