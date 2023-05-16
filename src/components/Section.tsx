import clsx from 'clsx'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  id: string
  title: string
  icon: React.JSX.Element
  children: React.ReactNode
}

export const Section = ({ children, title, icon, id, className }: Props) => {
  return (
    <section className={clsx('px-6 py-4 md:px-16 md:py-8', className)} id={id}>
      <div className="flex flex-col">
        <span className="text-5xl text-gray-600 opacity-10  mb-[-30px]  ml-[-10px] md:ml-[-25px]">
          {icon}
        </span>
        <h1 className="text-4xl font-bold text-gray-600">{title}</h1>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  )
}
