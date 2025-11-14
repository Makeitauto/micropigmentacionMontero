'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const beforeAfterSlides = [
  {
    id: 1,
    before: '/images/before-after/cejas-antes.jpg',
    after: '/images/before-after/cejas-despues.jpg',
    title: 'Microblading Cejas',
    description: 'Transformación natural de cejas con técnica de microblading premium.',
  },
  {
    id: 2,
    before: '/images/before-after/labios-antes.jpg',
    after: '/images/before-after/labios-despues.jpg',
    title: 'Aquacolor Lip',
    description: 'Realce de labios con color natural y contorno definido.',
  },
  {
    id: 3,
    before: '/images/before-after/capilar-antes.jpg',
    after: '/images/before-after/capilar-despues.jpg',
    title: 'Micropigmentación Capilar SMP',
    description: 'Restauración de densidad capilar con resultados hiperrealistas.',
  },
  {
    id: 4,
    before: '/images/before-after/correccion-antes.jpg',
    after: '/images/before-after/correccion-despues.jpg',
    title: 'Corrección de Areolas',
    description: 'Reconstrucción y corrección con pigmentación especializada.',
  },
]

export default function BeforeAfter() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterSlides.length) % beforeAfterSlides.length)
  }

  return (
    <section className="py-24 md:py-32 bg-premium-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-premium-black mb-4 tracking-wider-premium">
            Antes & Después
          </h2>
          <div className="w-24 h-px bg-premium-gold mx-auto mb-6" />
          <p className="text-lg text-premium-blue-gray font-body font-light max-w-2xl mx-auto leading-relaxed">
            Resultados reales de nuestros tratamientos. Transformaciones naturales y duraderas.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-premium-lg">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {beforeAfterSlides.map((slide) => (
                <div key={slide.id} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Before */}
                    <div className="relative h-96 md:h-[500px] bg-premium-black">
                      <div
                        className="absolute inset-0 bg-cover bg-center grayscale"
                        style={{ backgroundImage: `url(${slide.before})` }}
                      >
                        <div className="absolute inset-0 bg-premium-black/40" />
                      </div>
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-premium-black/80 backdrop-blur-sm text-premium-white text-sm font-display tracking-wide-premium rounded-premium">
                          ANTES
                        </span>
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative h-96 md:h-[500px] bg-premium-white">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.after})` }}
                      />
                      <div className="absolute top-6 right-6">
                        <span className="px-4 py-2 bg-premium-gold/90 backdrop-blur-sm text-premium-white text-sm font-display tracking-wide-premium rounded-premium">
                          DESPUÉS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Slide Info */}
                  <div className="bg-premium-white p-8 text-center">
                    <h3 className="text-2xl font-display font-light text-premium-black mb-2 tracking-wider-premium">
                      {slide.title}
                    </h3>
                    <p className="text-premium-blue-gray font-body">{slide.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-premium-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-premium hover:bg-premium-white transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="text-premium-black" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-premium-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-premium hover:bg-premium-white transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} className="text-premium-black" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {beforeAfterSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-premium-gold w-8'
                    : 'bg-premium-taupe hover:bg-premium-gold/50'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

