'use client'

import { motion } from 'framer-motion'
import { Shield, Sparkles, Award, Heart } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Pigmentos Médicos',
    description: 'Utilizamos únicamente pigmentos de grado médico certificados, garantizando seguridad y durabilidad excepcional.',
  },
  {
    icon: Sparkles,
    title: 'Protocolos Higiénicos Europeos',
    description: 'Seguimos los más estrictos protocolos de higiene y esterilización, cumpliendo con normativas internacionales.',
  },
  {
    icon: Award,
    title: 'Expertos Titulados',
    description: 'Nuestro equipo cuenta con certificaciones internacionales y formación continua en las últimas técnicas.',
  },
  {
    icon: Heart,
    title: 'Resultados Naturales Garantizados',
    description: 'Cada tratamiento se personaliza para lograr resultados completamente naturales y armoniosos con tu fisonomía.',
  },
]

export default function Differentiation() {
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
          <h2 className="text-4xl md:text-5xl font-display font-light text-premium-black mb-4 tracking-wider-premium neomorphic-title float-3d">
            Por Qué Elegirnos
          </h2>
          <div className="w-24 h-px bg-premium-gold mx-auto mb-6" />
          <p className="text-lg text-premium-blue-gray font-body font-light max-w-2xl mx-auto leading-relaxed">
            Excelencia en cada detalle, desde la selección de materiales hasta la técnica de aplicación.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            // Alternar entre raised (sobresale) e inset (hundido)
            const isRaised = index % 2 === 0
            const cardClass = isRaised ? 'neomorphic-raised' : 'neomorphic-inset'
            const iconClass = isRaised ? 'neomorphic-icon-raised' : 'neomorphic-icon-inset'
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
                style={{ perspective: '1000px' }}
              >
                <div className={`${cardClass} p-8 h-full flex flex-col relative overflow-hidden`}>
                  {/* Efecto de brillo sutil */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
                  </div>
                  
                  <div className="mb-6 relative z-10">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                        rotateX: 5
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`${iconClass} w-16 h-16 flex items-center justify-center`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Icon 
                        size={32} 
                        className={isRaised ? "text-white drop-shadow-lg" : "text-premium-gold drop-shadow-md"} 
                        style={{ transform: 'translateZ(5px)' }}
                      />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-premium-black mb-3 tracking-wide-premium relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-premium-blue-gray font-body text-sm leading-relaxed flex-grow relative z-10">
                    {feature.description}
                  </p>
                  
                  {/* Efecto de profundidad adicional en hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: isRaised 
                        ? 'radial-gradient(circle at 50% 0%, rgba(198, 166, 103, 0.1) 0%, transparent 70%)'
                        : 'radial-gradient(circle at 50% 100%, rgba(0, 0, 0, 0.05) 0%, transparent 70%)'
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

