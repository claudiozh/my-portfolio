'use client'

import { ids } from '@/utils/navlinks'
import { pathImages } from '@/utils/path-images'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'

export const Logo = () => {
  return (
    <div>
      <ScrollLink
        spy
        offset={-150}
        to={ids.home}
        smooth={true}
        duration={1000}
        activeClass="text-yellow-500"
      >
        <Image
          src={pathImages.logo}
          alt="Logo"
          width={140}
          height={80}
          className="max-h-11 cursor-pointer"
        />
      </ScrollLink>
    </div>
  )
}
