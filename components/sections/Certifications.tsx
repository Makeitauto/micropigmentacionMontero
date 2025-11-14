'use client'

import { motion } from 'framer-motion'
import { Award, Shield, CheckCircle } from 'lucide-react'

const certifications = [
  {
    icon: Award,
    title: 'Certificaciones Internacionales',
    description: 'Formación certificada en las mejores academias de Europa y Corea del Sur.',
  },
  {
    icon: Shield,
    title: 'Protocolos Sanitarios',
    description: 'Cumplimiento estricto de normativas sanitarias y protocolos de higiene internacionales.',
  },
  {
    icon: CheckCircle,
    title: 'Formación Continua',
    description: 'Actualización constante en las últimas técnicas y tecnologías de micropigmentación.',
  },
]

export default function Certifications() {
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
            Certificaciones y Garantías
          </h2>
          <div className="w-24 h-px bg-premium-gold mx-auto mb-6" />
          <p className="text-lg text-premium-blue-gray font-body font-light max-w-2xl mx-auto leading-relaxed">
            Comprometidos con la excelencia y la formación continua para ofrecerte los mejores resultados.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-premium-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Icon size={40} className="text-premium-gold" />
                </div>
                <h3 className="text-xl font-display font-semibold text-premium-black mb-3 tracking-wide-premium">
                  {cert.title}
                </h3>
                <p className="text-premium-blue-gray font-body text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60"
        >
          {/* Placeholder para logos de certificaciones */}
          <div className="h-16 w-32 bg-premium-taupe rounded-premium flex items-center justify-center">
            <span className="text-xs text-premium-blue-gray font-body">Logo 1</span>
          </div>
          <div className="h-16 w-32 bg-premium-taupe rounded-premium flex items-center justify-center">
            <span className="text-xs text-premium-blue-gray font-body">Logo 2</span>
          </div>
          <div className="h-16 w-32 bg-premium-taupe rounded-premium flex items-center justify-center">
            <span className="text-xs text-premium-blue-gray font-body">Logo 3</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

