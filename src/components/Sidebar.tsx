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
        'flex h-screen flex-col justify-between',
        'relative space-y-6 overflow-y-scroll',
        'bg-primary px-8 py-12',
        className,
      )}
    >
      <Logo />

      <nav className="flex-grow py-12">
        <ul className="text-lg font-semibold text-gray-50">
          {navLinks.map((link) => (
            <ScrollLink
              spy
              offset={-150}
              key={link.id}
              to={link.id}
              smooth={true}
              duration={1000}
              activeClass="text-yellow-500"
            >
              <li className="mb-6 flex items-center hover:cursor-pointer hover:text-yellow-500">
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
