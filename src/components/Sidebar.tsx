'use client'

import Image from 'next/image'
import {
  BiBriefcaseAlt2,
  BiChat,
  BiCode,
  BiDesktop,
  BiHome,
  BiUserCheck,
} from 'react-icons/bi'
// import { ScrollLink } from 'react-scroll'

const year = new Date().getFullYear()

const pathImages = {
  logo: '/logo.png',
}

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-72 px-8 py-12 bg-[#2E3D6E] border-r-[1px] border-slate-600 h-screen fixed">
      <Image src={pathImages.logo} alt="Logo" width={140} height={80} />

      <nav className="h-[100%] py-28">
        <ul className="text-gray-50 text-lg font-semibold">
          <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
            <BiHome className="mr-4 text-2xl" />
            <span>Home</span>
          </li>

          {/* <ScrollLink to="about" smooth={true} duration={1000}> */}
          <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
            <BiUserCheck className="mr-4 text-2xl" />
            <span>About</span>
          </li>
          {/* </ScrollLink> */}

          {/* <ScrollLink to="projects" smooth={true} duration={1000}> */}
          <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
            <BiDesktop className="mr-4 text-2xl" />
            <span>Projects</span>
          </li>
          {/* </ScrollLink> */}

          {/* <ScrollLink to="skills" smooth={true} duration={1000}> */}
          <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
            <BiCode className="mr-4 text-2xl" />
            <span>Skills</span>
          </li>
          {/* </ScrollLink> */}

          {/* <ScrollLink to="experience" smooth={true} duration={1000}> */}
          <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
            <BiBriefcaseAlt2 className="mr-4 text-2xl" />
            <span>Experience</span>
          </li>
          {/* </ScrollLink> */}

          {/* <ScrollLink to="contact" smooth={true} duration={1000}> */}
          <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
            <BiChat className="mr-4 text-2xl" />
            <span>Contact</span>
          </li>
          {/* </ScrollLink> */}
        </ul>
      </nav>

      <p className="text-slate-400">© {year} Claudio Rodrigo.</p>
    </div>
  )
}
