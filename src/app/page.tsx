'use client'

import { Rubik } from 'next/font/google'
import Image from 'next/image'
import {
  BiHome,
  BiUserCheck,
  BiBriefcaseAlt2,
  BiChat,
  BiDesktop,
  BiCode,
} from 'react-icons/bi'

import { Link as ScrollLink } from 'react-scroll'
import { About } from '@/components/About'
import { Home } from '@/components/Home'
import { Button } from '@/components/Button'
import { Skills } from '@/components/Skills'

const rubik = Rubik({ subsets: ['latin'] })
const year = new Date().getFullYear()

export default function PageDefault() {
  return (
    <div className={`${rubik.className}`}>
      {/* HEADER */}
      <div className="flex flex-col justify-between w-72 px-8 py-12 bg-[#2E3D6E] border-r-[1px] border-slate-600 h-screen fixed">
        <Image src="/logo.png" alt="Logo" width={140} height={80} />

        <nav className="h-[100%] py-28">
          <ul className="text-gray-50 text-lg font-semibold">
            <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
              <BiHome className="mr-4 text-2xl" />
              <span>Home</span>
            </li>

            <ScrollLink to="about" smooth={true} duration={1000}>
              <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
                <BiUserCheck className="mr-4 text-2xl" />
                <span>About</span>
              </li>
            </ScrollLink>

            <ScrollLink to="projects" smooth={true} duration={1000}>
              <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
                <BiDesktop className="mr-4 text-2xl" />
                <span>Projects</span>
              </li>
            </ScrollLink>

            <ScrollLink to="skills" smooth={true} duration={1000}>
              <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
                <BiCode className="mr-4 text-2xl" />
                <span>Skills</span>
              </li>
            </ScrollLink>

            <ScrollLink to="experience" smooth={true} duration={1000}>
              <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
                <BiBriefcaseAlt2 className="mr-4 text-2xl" />
                <span>Experience</span>
              </li>
            </ScrollLink>

            <ScrollLink to="contact" smooth={true} duration={1000}>
              <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
                <BiChat className="mr-4 text-2xl" />
                <span>Contact</span>
              </li>
            </ScrollLink>
          </ul>
        </nav>

        <p className="text-slate-400">© {year} Claudio Rodrigo.</p>
      </div>

      {/* SECTIONS */}
      <div className="bg-slate-100 ml-72">
        {/* SECTION MAIN */}
        <div className="bg-[#2E3D6E]">
          <div className="md:container md:mx-auto ">
            <Home />
          </div>
        </div>

        <div className="md:container md:mx-auto ">
          {/* SECTION ABOUT */}
          <About />

          {/* SECTION PROJECTS */}
          <section
            className="flex flex-col justify-between p-20 border border-red-500"
            id="projects"
          >
            <BiDesktop className="text-gray-600 opacity-10 text-5xl mb-[-30px] ml-[-25px]" />
            <h1 className="text-4xl font-bold text-gray-600">
              Projects Recent
            </h1>

            <div className="flex items-center justify-center mt-24 gap-10">
              <div
                className={`
                flex flex-col gap-5  items-center justify-center
                   bg-white p-10 rounded-3xl max-w-[300px] shadow-xl
              
                `}
              >
                <Image
                  src="/anyshare.png"
                  alt="Logo"
                  width={150}
                  height={100}
                />

                <p className="text-gray-400 text-center">
                  O AnyShare é um serviço que compartilhe códigos, comandos ou
                  qualquer tipo de texto em tempo real.
                </p>

                <Button text="Acessar" variant="secondary" />
              </div>

              <div
                className={`
                flex flex-col gap-5  items-center justify-center
                   bg-white p-10 rounded-3xl max-w-[350px] shadow-xl
                  transform -rotate-6 -translate-y-10
                `}
              >
                <Image
                  src="https://site.encurtaki.me/assets/logo.f8fce910.svg"
                  alt="Logo"
                  width={200}
                  height={150}
                />

                <p className="text-gray-400 text-center">
                  O Encurtaki é um serviço de encurtamento de URLs que permite
                  aos usuários transformar links longos em URLs curtas e fáceis
                  de compartilhar. É uma ferramenta simples e eficiente que
                  oferece uma maneira conveniente de encurtar URLs sem
                  complicações.
                </p>

                <Button text="Acessar" />
              </div>

              <div
                className={`
                flex flex-col gap-5  items-center justify-center
                  bg-white p-10 rounded-3xl max-w-[320px] shadow-xl
                `}
              >
                <Image src="/moveit.png" alt="Logo" width={150} height={100} />

                <p className="text-gray-400 text-center">
                  O Move.it é um app que utiliza a técnica de pomodoro, com
                  períodos de trabalho de 25 minutos seguidos por intervalos
                  curtos. A cada ciclo, os usuários recebem desafios para
                  realizar.
                </p>

                <Button text="Acessar" variant="secondary" />
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section
            className="flex flex-col justify-between p-20 border border-red-500"
            id="skills"
          >
            <BiCode className="text-gray-600 opacity-10 text-5xl mb-[-30px] ml-[-25px]" />
            <h1 className="text-4xl font-bold text-gray-600">Skills</h1>
            <Skills />
          </section>

          {/* SECTION EXPERIENCE */}
          <section
            className="flex flex-col justify-between p-20 border border-red-500"
            id="experience"
          >
            <BiBriefcaseAlt2 className="text-gray-600 opacity-10 text-5xl mb-[-30px] ml-[-25px]" />
            <h1 className="text-4xl font-bold text-gray-600">Experience</h1>

            <div className="flex items-center justify-between gap-8">
              <div className="bg-white flex flex-1  justify-between gap-4 shadow-xl p-10 rounded-3xl mt-12">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      February 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Application UI code in Tailwind CSS
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Learn more{' '}
                      <svg
                        className="w-3 h-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      March 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Marketing UI design in Figma
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      All of the pages and components are first designed in
                      Figma and we keep a parity between the two versions even
                      as we update the project.
                    </p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      April 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      E-Commerce UI code in Tailwind CSS
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Get started with dozens of web components and interactive
                      elements built on top of Tailwind CSS.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="bg-white flex flex-1  justify-between gap-4 shadow-xl p-10 rounded-3xl mt-12">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      February 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Application UI code in Tailwind CSS
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Learn more{' '}
                      <svg
                        className="w-3 h-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      March 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Marketing UI design in Figma
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      All of the pages and components are first designed in
                      Figma and we keep a parity between the two versions even
                      as we update the project.
                    </p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      April 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      E-Commerce UI code in Tailwind CSS
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Get started with dozens of web components and interactive
                      elements built on top of Tailwind CSS.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* SECTION CONTACT */}
          <section
            className="flex flex-col justify-between p-24 border border-red-500"
            id="contact"
          >
            <BiChat className="text-gray-600 opacity-10 text-5xl mb-[-30px] ml-[-25px]" />
            <h1 className="text-4xl font-bold text-gray-600">Contact</h1>

            <div className="grid grid-cols-6 gap-5 mt-12">
              <div className="col-span-2">
                <div>
                  <h1 className="text-2xl font-bold text-gray-600">
                    Let&apos;s talk about everything!
                  </h1>
                  <p className="text-gray-400 mt-4">
                    Don’t like forms? Send me an email. 👋
                  </p>
                </div>
              </div>
              <div className="col-span-4">
                <form className="flex flex-col gap-5 ">
                  <div className="flex gap-5">
                    <input
                      type="text"
                      className="w-full rounded-full px-5 py-5"
                      placeholder="Your name"
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-full px-5 py-5"
                    />
                  </div>

                  <div className="flex flex-col gap-5">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="rounded-full px-5 py-5"
                    />
                  </div>

                  <div className="flex flex-col gap-5">
                    <textarea
                      placeholder="Message"
                      rows={5}
                      className="rounded-3xl px-5 py-5"
                    />
                  </div>

                  <div>
                    <Button text="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
