'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Heart } from 'lucide-react'

export default function Team() {
  return (
    <section id="equipo" className="py-24 md:py-32 bg-premium-skin-light">
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
            Nuestro Equipo
          </h2>
          <div className="w-24 h-px bg-premium-gold mx-auto mb-6" />
          <p className="text-lg text-premium-blue-gray font-body font-light max-w-2xl mx-auto leading-relaxed">
            Profesionales certificados con años de experiencia y formación continua en las últimas técnicas.
          </p>
        </motion.div>

        {/* Team Member */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-premium-white rounded-premium-lg overflow-hidden shadow-premium-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Photo */}
              <div className="relative h-96 md:h-full min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/team/profesional.jpg)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-premium-black/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-display font-light text-premium-black mb-2 tracking-wider-premium">
                    [Nombre del Profesional]
                  </h3>
                  <p className="text-premium-gold font-body text-sm tracking-wide-premium mb-4">
                    Especialista en Micropigmentación Premium
                  </p>
                  <div className="w-16 h-px bg-premium-gold mb-6" />
                </div>

                <p className="text-premium-blue-gray font-body leading-relaxed mb-6">
                  Con más de [X] años de experiencia en micropigmentación, [Nombre] combina precisión técnica
                  con un enfoque artístico único. Certificado en las técnicas más avanzadas de microblading,
                  SMP y corrección, garantiza resultados naturales y duraderos para cada cliente.
                </p>

                {/* Credentials */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Award size={20} className="text-premium-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium text-premium-black text-sm">
                        Certificaciones Internacionales
                      </p>
                      <p className="font-body text-xs text-premium-blue-gray">
                        Formación en Europa y Corea del Sur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <GraduationCap size={20} className="text-premium-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium text-premium-black text-sm">
                        Formación Continua
                      </p>
                      <p className="font-body text-xs text-premium-blue-gray">
                        Actualización constante en nuevas técnicas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart size={20} className="text-premium-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium text-premium-black text-sm">
                        Enfoque Personalizado
                      </p>
                      <p className="font-body text-xs text-premium-blue-gray">
                        Cada tratamiento adaptado a tus necesidades
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

