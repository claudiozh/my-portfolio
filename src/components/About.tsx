'use client'

import Image from 'next/image'
import { BiUserCheck } from 'react-icons/bi'
import { Button } from '@/components/Button'

export const About = () => {
  return (
    <section
      className="flex flex-col justify-between p-20 border border-red-500"
      id="about"
    >
      <BiUserCheck className="text-gray-600 opacity-10 text-5xl mb-[-30px] ml-[-25px]" />
      <h1 className="text-4xl font-bold text-gray-600">About Me</h1>

      <div className="flex items-center mt-12 gap-10">
        <Image
          src="/avatar4.png"
          className="rounded-full border-4"
          alt="Logo"
          width={170}
          height={170}
        />

        <div className="bg-white flex flex-1  justify-between gap-4 shadow-xl p-10 rounded-3xl">
          <div className="relative mt-12">
            <div className="absolute w-0 h-0 left-[-40px] bottom-full transform translate-x-[-50%]">
              <div className="custom-triangle"></div>
            </div>
          </div>

          <div className="flex-1 text-gray-600 text-lg">
            <p className="mb-10">
              I am Bolby Doe, web developer from London, United Kingdom. I have
              rich experience in web site design and building and customization,
              also I am good at WordPress.
            </p>

            <Button text="Download csv" />
          </div>

          <div className="flex flex-col flex-1 gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className='text-gray-600 text-lg"'>Backend Developer</p>
                <p>90%</p>
              </div>
              <div className="bg-gray-200 h-2 rounded">
                <div className="bg-blue-500 h-full rounded"></div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className='text-gray-600 text-lg"'>Frontend Developer</p>
                <p>90%</p>
              </div>
              <div className="bg-gray-200 h-2 rounded">
                <div className="bg-red-500 h-full rounded"></div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className='text-gray-600 text-lg"'>
                  Passionate about sports
                </p>
                <p>0%</p>
              </div>
              <div className="bg-gray-200 h-2 rounded">
                <div className="w-[50%] bg-indigo-600 h-full rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
