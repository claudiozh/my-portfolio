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
      <div className="hidden lg:block fixed w-0 lg:w-72">
        <Sidebar className="border border-slate-600" />
      </div>

      <div className="block lg:hidden absolute top-0 right-0 p-4">
        <BiMenu
          className="text-4xl text-gray-100 border border-white rounded cursor-pointer"
          onClick={handleOpenDrawer}
        />

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Sidebar />
        </Drawer>
      </div>
    </header>
  )
}
