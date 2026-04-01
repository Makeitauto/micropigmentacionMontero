'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
}

const testimonials = [
  {
    id: 1,
    name: 'Marcos L.',
    treatment: 'Efecto Rapado',
    rating: 5,
    text: 'Buscaba una solución discreta para mi alopecia y el efecto rapado me devolvió un aspecto de cabeza recién rapada muy natural. La línea frontal y el tono del pigmento quedaron impecables. Trato cercano y muy profesional.',
  },
  {
    id: 2,
    name: 'Javier T.',
    treatment: 'Densificación',
    rating: 5,
    text: 'Tenía claridad en la coronilla y tras la densificación el cuero cabelludo gana volumen visual sin parecer artificial. El resultado es homogéneo y duradero; el proceso fue claro de principio a fin.',
  },
  {
    id: 3,
    name: 'Roberto P.',
    treatment: 'Post Cirugía o Injerto',
    rating: 5,
    text: 'Después del injerto quería integrar mejor la zona donante y suavizar transiciones. El trabajo post injerto unificó el aspecto y camufló detalles que me inquietaban. Precisión, higiene y resultados muy realistas.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-premium-skin-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 break-words px-1 text-3xl font-display font-light tracking-tight text-premium-black sm:text-4xl sm:tracking-normal md:text-5xl md:tracking-wider-premium">
            Opiniones de Nuestros Clientes
          </h2>
          <div className="w-24 h-px bg-premium-gold mx-auto mb-6" />
          <p className="text-lg text-premium-blue-gray font-body font-light max-w-2xl mx-auto leading-relaxed">
            Experiencias reales en micropigmentación capilar: efecto rapado, densificación y casos post injerto.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-premium-white p-8 rounded-premium-lg shadow-premium hover-lift"
            >
              <div className="mb-6">
                <Quote size={32} className="text-premium-gold/30 mb-4" />
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-premium-gold fill-premium-gold" />
                  ))}
                </div>
                <p className="text-premium-blue-gray font-body leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-premium-gold/15 font-display text-sm font-semibold text-premium-gold"
                  aria-hidden
                >
                  {initialsFromName(testimonial.name)}
                </div>
                <div>
                  <p className="font-display font-semibold text-premium-black text-sm tracking-wide-premium">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-premium-gold font-medium">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
