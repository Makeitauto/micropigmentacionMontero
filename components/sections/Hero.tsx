'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-white"
    >
      {/* Background Image con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Logo Grande */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-64 md:w-80 lg:w-96 h-auto">
              <Image
                src="/images/logo.png"
                alt="Microcapilar Montero"
                width={384}
                height={96}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-premium-white leading-tight tracking-wider-premium"
          >
            Micropigmentación
            <br />
            <span className="text-premium-gold font-normal">Avanzada</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-premium-taupe font-body font-light max-w-3xl mx-auto leading-relaxed"
          >
            Resultados naturales. Tecnología de élite. Excelencia certificada.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(198, 166, 103, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-premium-gold text-premium-white rounded-premium font-display font-medium text-base tracking-wider-premium flex items-center space-x-2 hover:bg-premium-gold-light transition-all duration-300"
            >
              <span>Reservar Diagnóstico Gratuito</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-premium-white text-premium-white rounded-premium font-display font-medium text-base tracking-wider-premium hover:bg-premium-white/10 transition-all duration-300"
            >
              Ver Tratamientos
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-premium-gold rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-premium-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

