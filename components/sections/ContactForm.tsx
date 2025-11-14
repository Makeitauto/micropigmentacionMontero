'use client'

import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Aquí integrarías con Supabase o tu API
    setTimeout(() => {
      setIsSubmitting(false)
      alert('¡Gracias por tu consulta! Te contactaremos pronto.')
      setFormData({ name: '', email: '', phone: '', treatment: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-premium-skin-light">
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
            Solicita tu Cita
          </h2>
          <div className="w-24 h-px bg-premium-gold mx-auto mb-6" />
          <p className="text-lg text-premium-blue-gray font-body font-light max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Completa el formulario y te contactaremos para agendar tu consulta gratuita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-light text-premium-black mb-6 tracking-wider-premium">
                Información de Contacto
              </h3>
              <p className="text-premium-blue-gray font-body leading-relaxed mb-8">
                Estamos disponibles para resolver todas tus dudas y ayudarte a encontrar el tratamiento perfecto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-premium-gold/10 rounded-premium flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-premium-gold" />
                </div>
                <div>
                  <p className="font-display font-semibold text-premium-black mb-1 tracking-wide-premium">
                    Teléfono
                  </p>
                  <p className="font-body text-premium-blue-gray">+34 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-premium-gold/10 rounded-premium flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-premium-gold" />
                </div>
                <div>
                  <p className="font-display font-semibold text-premium-black mb-1 tracking-wide-premium">
                    Email
                  </p>
                  <p className="font-body text-premium-blue-gray">info@microcapilarmontero.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-premium-gold/10 rounded-premium flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-premium-gold" />
                </div>
                <div>
                  <p className="font-display font-semibold text-premium-black mb-1 tracking-wide-premium">
                    Ubicación
                  </p>
                  <p className="font-body text-premium-blue-gray">[Dirección del estudio]</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-premium-white p-8 rounded-premium-lg shadow-premium-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-body font-medium text-premium-black mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-premium-taupe rounded-premium focus:outline-none focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all font-body"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-body font-medium text-premium-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-premium-taupe rounded-premium focus:outline-none focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all font-body"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-body font-medium text-premium-black mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-premium-taupe rounded-premium focus:outline-none focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all font-body"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="treatment" className="block text-sm font-body font-medium text-premium-black mb-2">
                    Tratamiento de interés
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-premium-taupe rounded-premium focus:outline-none focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all font-body bg-white"
                  >
                    <option value="">Selecciona un tratamiento</option>
                    <option value="cejas">Cejas (Microblading/Powder Brows)</option>
                    <option value="labios">Labios (Aquacolor Lip)</option>
                    <option value="capilar">Micropigmentación Capilar (SMP)</option>
                    <option value="correccion">Corrección y Reconstrucción</option>
                    <option value="consulta">Consulta general</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-body font-medium text-premium-black mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-premium-taupe rounded-premium focus:outline-none focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all font-body resize-none"
                  placeholder="Cuéntanos sobre tus necesidades o dudas..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-8 py-4 bg-premium-gold text-premium-white rounded-premium font-display font-medium text-base tracking-wider-premium hover:bg-premium-gold-light transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Solicitar Cita</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

