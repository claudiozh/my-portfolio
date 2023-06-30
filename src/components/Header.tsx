'use client'

import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Drawer } from '@/components/Drawer'
import { Sidebar } from '@/components/Sidebar'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDrawer = () => {
    setIsOpen(true)
  }

  return (
    <header>
      <div className="fixed hidden w-0 lg:block lg:w-72">
        <Sidebar className="border border-slate-600" />
      </div>

      <div className="absolute right-0 top-0 block p-4 lg:hidden">
        <BiMenu
          className="cursor-pointer rounded border border-white text-4xl text-gray-100"
          onClick={handleOpenDrawer}
        />

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Sidebar />
        </Drawer>
      </div>
    </header>
  )
}
