'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants = {
  primary:
    'bg-[#0071E3] text-white hover:bg-[#0077ED] shadow-md hover:shadow-lg active:scale-[0.98]',
  secondary:
    'bg-transparent border border-[rgba(0,0,0,0.14)] text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white hover:border-[#1D1D1F]',
  ghost:
    'bg-transparent text-[#1D1D1F] hover:text-[#0071E3] underline-offset-4 hover:underline',
  link: 'bg-transparent text-[#0071E3] hover:text-[#0077ED] p-0 h-auto font-normal',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 font-medium rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap',
    variant !== 'link' && sizes[size],
    variants[variant],
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
