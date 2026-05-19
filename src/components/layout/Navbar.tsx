'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { startTransition, useEffect, useState } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

const solutions = [
  { label: 'AI Orchestration', href: '/solutions#orchestration' },
  { label: 'AI Automation', href: '/solutions#automation' },
  { label: 'Intelligent Workflows', href: '/solutions#workflows' },
  { label: 'AI Integrations', href: '/solutions#integrations' },
  { label: 'Analytics Infrastructure', href: '/solutions#analytics' },
]

const navLinks = [
  { label: 'Solutions', href: '/solutions', dropdown: solutions },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    startTransition(() => setMobileOpen(false))
  }, [pathname])

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/80 backdrop-blur-[20px] border-b border-[rgba(0,0,0,0.08)] shadow-sm'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto max-w-content px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-[#1D1D1F]">3Cs</span>
              <span className="font-medium text-lg text-[#0071E3]">AI</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                        pathname.startsWith(link.href)
                          ? 'text-[#0071E3]'
                          : 'text-[#6E6E73] hover:text-[#1D1D1F]',
                      )}
                    >
                      {link.label}
                      <ChevronDown size={14} className={cn('transition-transform duration-200', solutionsOpen && 'rotate-180')} />
                    </button>

                    <AnimatePresence>
                      {solutionsOpen && (
                        <m.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white/90 backdrop-blur-[20px] border border-[rgba(0,0,0,0.08)] shadow-lg py-2"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                      pathname === link.href
                        ? 'text-[#0071E3]'
                        : 'text-[#6E6E73] hover:text-[#1D1D1F]',
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button href="/contact" variant="primary" size="sm">
                Get in Touch →
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <m.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-0 top-16 bg-white z-40 flex flex-col px-6 py-8 gap-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'py-3 text-lg font-medium border-b border-[rgba(0,0,0,0.06)] transition-colors',
                    pathname === link.href ? 'text-[#0071E3]' : 'text-[#1D1D1F]',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6">
                <Button href="/contact" variant="primary" size="lg" className="w-full justify-center">
                  Get in Touch →
                </Button>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  )
}
