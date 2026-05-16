'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-xl border-b border-gold-400/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-display font-black text-lg shadow-lg group-hover:scale-105 transition-transform">
            JG
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-cream text-lg leading-tight">JG University</div>
            <div className="text-gold-400/70 text-xs font-mono tracking-widest uppercase">Ahmedabad</div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cream/70 hover:text-gold-400 text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#programs" className="text-cream/70 hover:text-gold-400 text-sm font-medium transition-colors">
            Explore Courses
          </a>
          <a
            href="#cta"
            className="bg-gold-400 text-navy-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gold-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,200,66,0.4)] hover:scale-105"
          >
            Apply Now →
          </a>
        </div>

        {/* Mobile menu btn */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-900/98 border-t border-gold-400/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream/80 hover:text-gold-400 font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="bg-gold-400 text-navy-900 font-semibold px-5 py-3 rounded-full text-center mt-2 hover:bg-gold-500 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  )
}
