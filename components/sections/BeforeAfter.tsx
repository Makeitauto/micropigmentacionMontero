'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const beforeAfterSlides = [
  {
    id: 1,
    before: '/images/densidad-antes.jpeg',
    after: '/images/densiadad-despues.jpeg',
    title: 'Densificación',
    description:
      'Mayor densidad visual en zonas con aclaramiento capilar, con acabado natural.',
  },
  {
    id: 2,
    before: '/images/post%20injerto%20antes.jpeg',
    after: '/images/Post%20injerto%20despues.jpeg',
    title: 'Post injerto',
    description:
      'Integración natural tras injerto capilar: camuflaje de cicatrices y transición homogénea.',
  },
  {
    id: 3,
    before: '/images/efecto-rapado-antes.jpeg',
    after: '/images/efecto-rapado-despues.jpeg',
    title: 'Efecto rapado',
    description:
      'Aspecto de cabeza recién rapada con SMP: línea limpia y tono que imita el folículo natural.',
  },
]

export default function BeforeAfter() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % beforeAfterSlides.length)
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + beforeAfterSlides.length) % beforeAfterSlides.length)

  const current = beforeAfterSlides[currentSlide]

  return (
    <section className="py-28 md:py-36 bg-[#F8F6F3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-body tracking-[0.25em] text-premium-gold uppercase mb-4">
            Resultados reales
          </p>
          <h2 className="mb-5 break-words px-1 text-3xl font-display font-light tracking-tight text-premium-black sm:text-4xl sm:tracking-normal md:text-5xl md:tracking-wider-premium">
            Antes &amp; Después
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-premium-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-premium-gold" />
            <div className="h-px w-16 bg-premium-gold/40" />
          </div>
          <p className="mt-6 text-base text-premium-blue-gray font-body font-light max-w-xl mx-auto leading-relaxed">
            Transformaciones documentadas. Técnica, precisión y cuidado en cada caso.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.08)]"
        >
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Before */}
            <div className="relative flex items-center justify-center bg-[#F2EFE9] p-6 md:p-10">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={current.before}
                  alt={`Antes: ${current.title}`}
                  className="w-full h-auto object-contain max-h-[520px]"
                  loading={currentSlide === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="pointer-events-none absolute left-4 top-4 sm:left-8 sm:top-8">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-display tracking-[0.15em] uppercase text-white bg-neutral-800/80 backdrop-blur-sm shadow-sm">
                  Antes
                </span>
              </div>
            </div>

            {/* After */}
            <div className="relative flex items-center justify-center bg-[#F2EFE9] p-6 md:p-10 border-t border-neutral-100 md:border-t-0 md:border-l md:border-l-premium-gold/20">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={current.after}
                  alt={`Después: ${current.title}`}
                  className="w-full h-auto object-contain max-h-[520px]"
                  loading={currentSlide === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="pointer-events-none absolute right-4 top-4 sm:right-8 sm:top-8">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-display tracking-[0.15em] uppercase text-white bg-premium-gold/85 backdrop-blur-sm shadow-sm">
                  Después
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4 border-t border-neutral-100 px-4 py-6 sm:px-8 sm:py-7 md:flex-row md:items-center md:justify-between md:px-12 md:py-8">
            <div>
              <h3 className="break-words text-lg font-display font-light tracking-tight text-premium-black sm:text-xl md:text-2xl md:tracking-wider-premium">
                {current.title}
              </h3>
              <p className="mt-1 text-sm text-premium-blue-gray font-body leading-relaxed">
                {current.description}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-premium-gold hover:text-premium-gold transition-colors duration-200"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-body text-premium-blue-gray tabular-nums tracking-widest">
                {String(currentSlide + 1).padStart(2, '0')} / {String(beforeAfterSlides.length).padStart(2, '0')}
              </span>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-premium-gold hover:text-premium-gold transition-colors duration-200"
                aria-label="Siguiente"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {beforeAfterSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-premium-gold w-8'
                  : 'bg-neutral-300 w-1.5 hover:bg-premium-gold/40'
              }`}
              aria-label={`Caso ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

