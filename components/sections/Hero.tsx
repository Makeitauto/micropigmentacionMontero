'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] min-h-screen flex-col justify-center overflow-hidden bg-premium-white px-0 pb-12 pt-24 sm:pb-16 sm:pt-28 md:pt-24"
    >
      {/* Background Image con overlay */}
      <motion.div
        className="absolute inset-0 origin-center bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: 'url(/images/background2.png)',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5 sm:space-y-6 md:space-y-8"
        >
          {/* Logo Grande */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 flex justify-center sm:mb-8"
          >
            <div className="relative mx-auto h-auto w-[min(100%,14rem)] sm:w-56 md:w-64 lg:w-80 xl:w-96">
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
            className="mx-auto max-w-full px-1 font-display text-[clamp(1.65rem,5.8vw+0.5rem,5.75rem)] font-light leading-[1.1] tracking-tight text-premium-white sm:text-5xl sm:tracking-normal md:text-6xl md:tracking-wide lg:text-7xl lg:tracking-wider-premium xl:text-8xl break-words hyphens-auto"
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
            className="mx-auto max-w-3xl px-1 text-base font-body font-light leading-relaxed text-premium-taupe sm:text-lg md:text-xl lg:text-2xl"
          >
            Resultados naturales. Tecnología de élite. Excelencia certificada.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 pt-2 sm:max-w-none sm:flex-row sm:items-center sm:gap-4 sm:pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(198, 166, 103, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex w-full items-center justify-center gap-2 rounded-premium bg-premium-gold px-5 py-3.5 text-sm font-display font-medium tracking-wide text-premium-white transition-all duration-300 hover:bg-premium-gold-light sm:w-auto sm:px-8 sm:py-4 sm:text-base sm:tracking-wider-premium"
            >
              <span className="text-center leading-snug">Reservar valoración gratuita</span>
              <ArrowRight
                size={20}
                className="shrink-0 group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>
            <motion.a
              href="#tratamientos"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('tratamientos')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full items-center justify-center rounded-premium border-2 border-premium-white bg-transparent px-5 py-3.5 text-center text-sm font-display font-medium tracking-wide text-premium-white transition-all duration-300 hover:bg-premium-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base sm:tracking-wider-premium"
            >
              Ver Tratamientos
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-8"
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

