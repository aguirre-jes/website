'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/lib/data'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  function sectionHref(href: string) {
    if (pathname !== '/') return href
    const hash = href.includes('#') ? href.slice(href.indexOf('#')) : href
    return hash
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-scrolled' : 'navbar-blend'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href={sectionHref('/#inicio')} className="focus-ring-inverse flex items-center rounded-md">
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              <span className="text-white">JUG</span>
              <span className="text-[#F89820]">Panama</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={sectionHref(link.href)}
                  className="focus-ring-inverse rounded-md px-1 py-1 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="focus-ring-inverse tap-target p-2 text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Cerrar menú"
            className="fixed inset-0 top-16 z-30 bg-[#0D1A2D]/72 backdrop-blur-[2px] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            id="mobile-navigation"
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/12 bg-[#22385A]/98 p-3 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.7)] md:hidden"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={sectionHref(link.href)}
                    className="focus-ring-inverse tap-target block rounded-lg px-3 py-2.5 text-base font-semibold text-white/85 transition-colors hover:bg-white/6 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}
