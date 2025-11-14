'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Tratamientos', href: '#tratamientos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-premium-white/95 backdrop-blur-md shadow-premium'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-12 w-auto"
            >
              <Image
                src="/images/logo.png"
                alt="Microcapilar Montero"
                width={180}
                height={48}
                className="h-full w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-body font-medium text-premium-black hover:text-premium-gold transition-colors duration-300 tracking-wide-premium"
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-premium-gold text-premium-white rounded-premium font-medium text-sm tracking-wide-premium hover:bg-premium-gold-light transition-colors duration-300"
            >
              Reservar Cita
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-premium-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-premium-white border-t border-premium-taupe"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-body text-premium-black hover:text-premium-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-premium-gold text-premium-white rounded-premium font-medium"
              >
                Reservar Cita
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

