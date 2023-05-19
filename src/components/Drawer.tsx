'use client'

import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const Drawer = ({ children, isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={clsx(
        'min-h-screen fixed overflow-hidden z-10 bg-gray-900 bg-opacity-70',
        'inset-0 transform ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <div
        className={clsx(
          'w-72 h-full absolute left-0 shadow-xl delay-400 ',
          'duration-500 ease-in-out transition-all transform',
          isOpen ? '-translate-x-0' : '-translate-x-full',
        )}
      >
        {children}
      </div>

      <div
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false)
        }}
      ></div>
    </div>
  )
}
