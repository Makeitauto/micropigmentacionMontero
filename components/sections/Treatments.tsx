'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const treatments = [
  {
    id: 'efecto-rapado',
    title: 'Efecto Rapado',
    subtitle: 'Alopecia Androgénica o Universal',
    description: 'Para tratar la alopecia androgénica o la alopecia universal. Se diseña una línea frontal y se elige un tono para el pigmento que imite el color del folículo en su crecimiento.',
    image: '/images/treatments/capilar.jpg',
    price: '900€ - 1500€',
    features: ['Alopecia Androgénica', 'Alopecia Universal', 'Diseño Personalizado'],
  },
  {
    id: 'densificacion',
    title: 'Densificación',
    subtitle: 'Alopecia Difusa o Traumática',
    description: 'Para tratar la alopecia difusa o traumática. Se rellena los espacios que se requiera, para dar un efecto de mayor densidad.',
    image: '/images/treatments/capilar.jpg',
    price: '800€ - 1200€',
    features: ['Alopecia Difusa', 'Alopecia Traumática', 'Mayor Densidad'],
  },
  {
    id: 'post-cirugia',
    title: 'Post Cirugía o Injerto',
    subtitle: 'Alopecia Cicatricial o Areata',
    description: 'Para tratar la alopecia cicatricial o areata. Se rellena las zonas afectadas, con un tono de pigmento que imita el color natural del pelo del cliente ocultando así cicatrices o zonas afectadas.',
    image: '/images/treatments/capilar.jpg',
    price: '500€ - 1500€',
    features: ['Alopecia Cicatricial', 'Alopecia Areata', 'Ocultación de Cicatrices'],
  },
]

export default function Treatments() {
  return (
    <section id="tratamientos" className="py-24 md:py-32 bg-premium-skin-light">
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
            Nuestros Tratamientos
          </h2>
          <div className="w-24 h-px bg-premium-gold mx-auto mb-6" />
          <p className="text-lg text-premium-blue-gray font-body font-light max-w-2xl mx-auto leading-relaxed">
            Técnicas avanzadas personalizadas para cada necesidad, con resultados naturales y duraderos.
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-premium-white rounded-premium-lg overflow-hidden shadow-premium hover-lift h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${treatment.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-premium-black/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl md:text-3xl font-display font-light text-premium-white mb-1 tracking-wider-premium">
                      {treatment.title}
                    </h3>
                    <p className="text-premium-gold font-body text-sm tracking-wide-premium">
                      {treatment.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-premium-blue-gray font-body leading-relaxed mb-6 flex-grow">
                    {treatment.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 bg-premium-gold/10 rounded-premium border border-premium-gold/20">
                      <span className="text-premium-gold font-display font-semibold text-lg tracking-wide-premium">
                        {treatment.price}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {treatment.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-premium-taupe text-premium-black text-xs font-body rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-premium-gold font-body font-medium text-sm group-hover:text-premium-gold-light transition-colors"
                  >
                    <span>Saber más</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

