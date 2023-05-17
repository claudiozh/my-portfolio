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
import { useEffect, useState } from 'react'

const year = new Date().getFullYear()

const iconBySectionId = {
  home: <BiHome className="mr-4 text-2xl" />,
  about: <BiUserCheck className="mr-4 text-2xl" />,
  projects: <BiDesktop className="mr-4 text-2xl" />,
  skills: <BiCode className="mr-4 text-2xl" />,
  experience: <BiBriefcaseAlt2 className="mr-4 text-2xl" />,
  contact: <BiChat className="mr-4 text-2xl" />,
}

export const Sidebar = () => {
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const handleSetActiveSection = (id: string) => {
    setActiveSection(id)
  }

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop

      if (scrollTop + windowHeight >= documentHeight) {
        setIsScrollAtEnd(true)
      } else {
        setIsScrollAtEnd(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col justify-between h-screen px-8 py-12 bg-[#2E3D6E] border-r-[1px] border-slate-600">
      <Logo />

      <nav className="h-[100%] py-16">
        <ul className="text-lg text-gray-50 font-semibold">
          {navLinks.map((link, index) => (
            <ScrollLink
              spy
              offset={0}
              key={link.id}
              to={link.id}
              smooth={true}
              duration={1000}
              onSetActive={handleSetActiveSection}
              isDynamic
            >
              <li
                className={`flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer
                  ${
                    isScrollAtEnd
                      ? link.id === navLinks[navLinks.length - 1].id &&
                        'text-yellow-500'
                      : activeSection === link.id && 'text-yellow-500'
                  }
                `}
              >
                <span>
                  {iconBySectionId[link.id as keyof typeof iconBySectionId]}
                </span>
                <span>{link.label} </span>
              </li>
            </ScrollLink>
          ))}
        </ul>
      </nav>

      <p className="text-slate-400">© {year} Claudio Rodrigo.</p>
    </div>
  )
}
