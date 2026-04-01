import Link from 'next/link'
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-premium-black text-premium-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold tracking-wider-premium">
              MICROCAPILAR <span className="text-premium-gold">MONTERO</span>
            </h3>
            <p className="text-sm text-premium-taupe leading-relaxed">
              Micropigmentación avanzada con precisión médica. Excelencia certificada y resultados naturales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 tracking-wide-premium">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#tratamientos" className="text-premium-taupe hover:text-premium-gold transition-colors">
                  Tratamientos
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="text-premium-taupe hover:text-premium-gold transition-colors">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="#equipo" className="text-premium-taupe hover:text-premium-gold transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-premium-taupe hover:text-premium-gold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 tracking-wide-premium">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-premium-taupe">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href="tel:+34654764909" className="hover:text-premium-gold transition-colors">
                  +34 654 764 909
                </a>
              </li>
              <li className="flex items-start space-x-3 text-premium-taupe">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a
                  href="mailto:contacto@microcapilarmontero.com"
                  className="break-all hover:text-premium-gold transition-colors"
                >
                  contacto@microcapilarmontero.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-premium-taupe">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  Carrer del Mestre Gozalbo, 18
                  <br />
                  46005 Valencia
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 tracking-wide-premium">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-premium-taupe hover:text-premium-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-premium-taupe hover:text-premium-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-premium-black-soft mt-12 pt-8 text-center text-sm text-premium-taupe">
          <p>&copy; {new Date().getFullYear()} Microcapilar Montero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

