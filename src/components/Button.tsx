import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'light'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: Variant
}

const styleByVariant: Record<Variant, string> = {
  primary: 'bg-red-500 text-white',
  secondary: 'bg-white text-red-500 border border-red-500',
  light: 'border border-gray-50 text-gray-50',
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const buttonStyles = `
    px-8 py-3
    text-lg font-bold
    rounded-full
    transition duration-300 ease-in-out delay-150
    hover:cursor-pointer hover:-translate-y-1 hover:scale-110
    ${styleByVariant[variant]}
    ${className}
    focus:ring-0
    focus:outline-none
  `

  return (
    <button className={clsx(buttonStyles)} {...props}>
      {text}
    </button>
  )
}
