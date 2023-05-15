'use client'

import {
  BiHome,
  BiUserCheck,
  BiBriefcaseAlt2,
  BiChat,
  BiDesktop,
  BiCode,
} from 'react-icons/bi'

import { Link as ScrollLink } from 'react-scroll'
import { Logo } from '@/components/Logo'
import { ids, navLinks } from '@/utils/navlinks'
import { useScrollspy } from '@/hooks/scrolloy'
import clsx from 'clsx'

const year = new Date().getFullYear()

const iconsById = {
  home: <BiHome className="mr-4 text-2xl" />,
  about: <BiUserCheck className="mr-4 text-2xl" />,
  projects: <BiDesktop className="mr-4 text-2xl" />,
  skills: <BiCode className="mr-4 text-2xl" />,
  experience: <BiBriefcaseAlt2 className="mr-4 text-2xl" />,
  contact: <BiChat className="mr-4 text-2xl" />,
}

export const Sidebar = () => {
  const activeId = useScrollspy(Object.keys(ids), 350)

  return (
    <div className="flex flex-col justify-between w-72 h-screen fixed px-8 py-12 bg-[#2E3D6E] border-r-[1px] border-slate-600">
      <Logo />

      <nav className="h-[100%] py-20">
        <ul className="text-lg text-gray-50 font-semibold">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.id}
              smooth={true}
              duration={1000}
            >
              <li
                className={clsx(
                  'flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer',
                  link.id === activeId && 'text-yellow-500',
                )}
              >
                <span>{iconsById[link.id as keyof typeof iconsById]}</span>
                <span>{link.label}</span>
              </li>
            </ScrollLink>
          ))}
        </ul>
      </nav>

      <p className="text-slate-400">© {year} Claudio Rodrigo.</p>
    </div>
  )
}
