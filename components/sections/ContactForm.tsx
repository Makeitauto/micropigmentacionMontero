'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
  })

  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Error al enviar el mensaje.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', treatment: '', message: '' })
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Error al enviar el mensaje.')
    }
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
          <h2 className="mb-4 break-words px-1 text-3xl font-display font-light tracking-tight text-premium-black sm:text-4xl sm:tracking-normal md:text-5xl md:tracking-wider-premium">
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
              <h3 className="mb-6 break-words text-xl font-display font-light tracking-tight text-premium-black sm:text-2xl sm:tracking-wider-premium">
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
                  <a
                    href="tel:+34654764909"
                    className="font-body text-premium-blue-gray hover:text-premium-gold transition-colors"
                  >
                    +34 654 764 909
                  </a>
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
                  <a
                    href="mailto:contacto@microcapilarmontero.com"
                    className="font-body text-premium-blue-gray hover:text-premium-gold transition-colors break-all"
                  >
                    contacto@microcapilarmontero.com
                  </a>
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
                  <p className="font-body text-premium-blue-gray leading-relaxed">
                    Carrer del Mestre Gozalbo, 18
                    <br />
                    46005 Valencia
                  </p>
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
                    placeholder="+34 654 764 909"
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
                disabled={status === 'submitting' || status === 'success'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-8 py-4 bg-premium-gold text-premium-white rounded-premium font-display font-medium text-base tracking-wider-premium hover:bg-premium-gold-light transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
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

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-premium"
                  >
                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-body font-medium text-green-800">¡Solicitud enviada!</p>
                      <p className="text-sm font-body text-green-700 mt-0.5">
                        Te hemos enviado un email de confirmación. Nos pondremos en contacto contigo en menos de 24&nbsp;horas.
                      </p>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-premium"
                  >
                    <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-body font-medium text-red-800">No se pudo enviar el mensaje</p>
                      <p className="text-sm font-body text-red-700 mt-0.5">{errorMsg}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

