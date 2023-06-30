'use client'

import clsx from 'clsx'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Props extends React.HTMLAttributes<HTMLElement> {
  id: string
  title: string
  icon: React.JSX.Element
  children: React.ReactNode
}

export const Section = ({ children, title, icon, id, className }: Props) => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <section
      id={id}
      className={clsx('px-6 py-4 sm:px-16 sm:py-8', className)}
      data-aos="zoom-in-down"
      data-aos-duration="1000"
    >
      <div className="flex flex-col">
        <span className="mb-[-30px] ml-[-10px] text-5xl  text-gray-600  opacity-10 md:ml-[-25px]">
          {icon}
        </span>
        <h1 className="text-4xl font-bold text-gray-600">{title}</h1>
      </div>

      <div className="mt-12">{children}</div>
    </section>
  )
}
