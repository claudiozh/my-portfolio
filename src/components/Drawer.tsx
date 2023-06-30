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
        'fixed z-10 min-h-screen overflow-hidden bg-gray-900 bg-opacity-70',
        'inset-0 transform ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <div
        className={clsx(
          'delay-400 absolute left-0 h-full w-72 shadow-xl ',
          'transform transition-all duration-500 ease-in-out',
          isOpen ? '-translate-x-0' : '-translate-x-full',
        )}
      >
        {children}
      </div>

      <div
        className="h-full w-screen cursor-pointer"
        onClick={() => {
          setIsOpen(false)
        }}
      ></div>
    </div>
  )
}
