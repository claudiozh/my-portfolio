import React from 'react'

type Props = {
  id: string
  title: string
  icon: React.JSX.Element
  children: React.ReactNode
}

export const Section = ({ children, title, icon, id }: Props) => {
  return (
    <section className="p-14" id={id}>
      <div className="flex flex-col">
        <span className="text-gray-600 opacity-10 text-5xl mb-[-30px] ml-[-25px]">
          {icon}
        </span>
        <h1 className="text-4xl font-bold text-gray-600">{title}</h1>
      </div>

      {children}
    </section>
  )
}
