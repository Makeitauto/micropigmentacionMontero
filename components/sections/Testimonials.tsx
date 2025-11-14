'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    treatment: 'Microblading Cejas',
    rating: 5,
    text: 'Increíble experiencia. Las cejas quedaron perfectas, muy naturales. El proceso fue profesional y el resultado superó mis expectativas. Totalmente recomendable.',
    image: '/images/testimonials/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Ana Martínez',
    treatment: 'Aquacolor Lip',
    rating: 5,
    text: 'Después de años buscando un profesional de confianza, finalmente encontré la excelencia. Los labios quedaron con un color natural perfecto. Servicio impecable.',
    image: '/images/testimonials/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    treatment: 'Micropigmentación Capilar SMP',
    rating: 5,
    text: 'La solución perfecta para mi alopecia. El resultado es tan natural que nadie nota la diferencia. Profesionalidad y atención al detalle en cada paso.',
    image: '/images/testimonials/testimonial-3.jpg',
  },
  {
    id: 4,
    name: 'Carmen Ruiz',
    treatment: 'Corrección de Areolas',
    rating: 5,
    text: 'Un proceso delicado realizado con máxima profesionalidad. El resultado es perfecto y ha mejorado mi confianza significativamente. Gracias por vuestra dedicación.',
    image: '/images/testimonials/testimonial-4.jpg',
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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
          <h2 className="text-4xl md:text-5xl font-display font-light text-premium-black mb-4 tracking-wider-premium">
            Opiniones de Nuestros Clientes
          </h2>
          <div className="w-24 h-px bg-premium-gold mx-auto mb-6" />
          <p className="text-lg text-premium-blue-gray font-body font-light max-w-2xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <p className="font-display font-semibold text-premium-black text-sm tracking-wide-premium">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-premium-blue-gray">
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

