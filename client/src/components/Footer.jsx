export default function Footer() {
  return (
    <footer id="contacto" className="bg-[var(--vintage-dark)] text-[var(--vintage-cream)] relative overflow-hidden">
      {/* Newsletter section */}
      <div className="border-b border-[var(--vintage-gold)]/30 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="display-font text-5xl mb-4">
            SUSCRÍBETE A NUESTRO NEWSLETTER
          </h3>
          <p className="text-lg mb-8 text-[var(--vintage-gold)]">
            Recibe ofertas exclusivas y novedades musicales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 bg-[var(--vintage-cream)] text-[var(--vintage-dark)] placeholder:text-[var(--vintage-brown)] focus:outline-none focus:ring-2 focus:ring-[var(--vintage-gold)]"
            />
            <button className="px-8 py-4 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider uppercase hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-colors duration-300">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="display-font text-4xl mb-4 text-[var(--vintage-gold)]">
              EL MUSIQUERO
            </h2>
            <p className="text-[var(--vintage-cream)]/80 mb-4">
              Tu tienda de confianza para instrumentos musicales desde 1987.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-[var(--vintage-gold)] flex items-center justify-center hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-colors duration-300">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 border border-[var(--vintage-gold)] flex items-center justify-center hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-colors duration-300">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 border border-[var(--vintage-gold)] flex items-center justify-center hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-colors duration-300">
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="display-font text-2xl mb-4 text-[var(--vintage-gold)]">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {['Catálogo', 'Novedades', 'Ofertas', 'Sobre Nosotros', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[var(--vintage-cream)]/80 hover:text-[var(--vintage-gold)] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="display-font text-2xl mb-4 text-[var(--vintage-gold)]">
              Categorías
            </h4>
            <ul className="space-y-2">
              {['Guitarras', 'Pianos', 'Batería', 'Vientos', 'Accesorios'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-[var(--vintage-cream)]/80 hover:text-[var(--vintage-gold)] transition-colors duration-300">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="display-font text-2xl mb-4 text-[var(--vintage-gold)]">
              Contacto
            </h4>
            <ul className="space-y-3 text-[var(--vintage-cream)]/80">
              <li className="flex items-start gap-3">
                <span className="text-[var(--vintage-gold)] mt-1">📍</span>
                <span>Av. Principal 123, Centro Musical, Ciudad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--vintage-gold)] mt-1">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--vintage-gold)] mt-1">✉️</span>
                <span>info@elmusiquero.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--vintage-gold)] mt-1">🕐</span>
                <span>Lun - Sáb: 9:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--vintage-gold)]/30 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--vintage-cream)]/60 text-sm">
            © 2026 El Musiquero. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[var(--vintage-cream)]/60 hover:text-[var(--vintage-gold)] transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="text-[var(--vintage-cream)]/60 hover:text-[var(--vintage-gold)] transition-colors duration-300">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>

      {/* Decorative vinyl record */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-5 -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="var(--vintage-gold)" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="var(--vintage-dark)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="var(--vintage-dark)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="var(--vintage-dark)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="8" fill="var(--vintage-dark)" />
        </svg>
      </div>
    </footer>
  );
}
