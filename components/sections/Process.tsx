'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Sparkles, Heart, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico',
    description: 'Consulta inicial personalizada para analizar tus necesidades y diseñar el tratamiento ideal.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Diseño',
    description: 'Creación del diseño personalizado adaptado a tu fisonomía y preferencias estéticas.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Procedimiento',
    description: 'Aplicación con técnicas avanzadas y pigmentos de grado médico de máxima calidad.',
  },
  {
    number: '04',
    icon: Heart,
    title: 'Curación',
    description: 'Seguimiento durante el proceso de curación con instrucciones personalizadas.',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Revisión',
    description: 'Sesión de retoque para perfeccionar el resultado y garantizar la durabilidad óptima.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-premium-white">
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
            Nuestro Proceso
          </h2>
          <div className="w-24 h-px bg-premium-gold mx-auto mb-6" />
          <p className="text-lg text-premium-blue-gray font-body font-light max-w-2xl mx-auto leading-relaxed">
            Un proceso meticuloso en 5 etapas para garantizar resultados excepcionales y duraderos.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-premium-taupe" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-premium-white text-center">
                    {/* Icon Circle */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto bg-premium-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-premium-gold/20 transition-colors">
                        <Icon size={32} className="text-premium-gold" />
                      </div>
                      {/* Number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-premium-gold rounded-full flex items-center justify-center">
                        <span className="text-xs font-display font-semibold text-premium-white">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-semibold text-premium-black mb-3 tracking-wide-premium">
                      {step.title}
                    </h3>
                    <p className="text-sm text-premium-blue-gray font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-premium-gold text-premium-white rounded-premium font-display font-medium text-base tracking-wider-premium hover:bg-premium-gold-light transition-colors duration-300"
          >
            Solicitar Diagnóstico Gratuito
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

