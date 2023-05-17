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
import { navLinks } from '@/utils/navlinks'
import React from 'react'
import clsx from 'clsx'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const year = new Date().getFullYear()

const iconBySectionId: Record<string, React.JSX.Element> = {
  home: <BiHome className="mr-4 text-2xl" />,
  about: <BiUserCheck className="mr-4 text-2xl" />,
  projects: <BiDesktop className="mr-4 text-2xl" />,
  skills: <BiCode className="mr-4 text-2xl" />,
  experience: <BiBriefcaseAlt2 className="mr-4 text-2xl" />,
  contact: <BiChat className="mr-4 text-2xl" />,
}

export const Sidebar = ({ className = '' }: SidebarProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between h-screen',
        'relative space-y-6 overflow-y-scroll',
        'px-8 py-12 bg-[#2E3D6E]',
        className,
      )}
    >
      <Logo />

      <nav className="flex-1 py-16">
        <ul className="text-lg text-gray-50 font-semibold">
          {navLinks.map((link, index) => (
            <ScrollLink
              spy
              offset={-100}
              key={link.id}
              to={link.id}
              smooth={true}
              duration={1000}
              activeClass="text-yellow-500"
            >
              <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
                <span>
                  {iconBySectionId[link.id as keyof typeof iconBySectionId]}
                </span>
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
