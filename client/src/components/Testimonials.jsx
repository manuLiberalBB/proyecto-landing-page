export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'Guitarrista Profesional',
      text: 'El Musiquero tiene la mejor selección de guitarras en la ciudad. Encontré mi Gibson soñada y el servicio fue excepcional.',
      rating: 5
    },
    {
      name: 'María González',
      role: 'Profesora de Piano',
      text: 'Compré mi piano Yamaha aquí y no podría estar más feliz. El equipo me ayudó a encontrar exactamente lo que necesitaba.',
      rating: 5
    },
    {
      name: 'Roberto Silva',
      role: 'Músico Aficionado',
      text: 'Gran variedad de instrumentos y precios justos. Definitivamente mi tienda favorita para todo lo musical.',
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-24 px-6 bg-[var(--vintage-dark)] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="musicPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <text x="10" y="50" fill="var(--vintage-gold)" fontSize="60" opacity="0.3">♪</text>
              <text x="60" y="80" fill="var(--vintage-gold)" fontSize="40" opacity="0.3">♫</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#musicPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="display-font text-6xl md:text-8xl text-[var(--vintage-cream)] mb-4">
            TESTIMONIOS
          </h2>
          <p className="text-xl text-[var(--vintage-gold)] italic">
            Lo que dicen nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-[var(--vintage-cream)] p-8 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Quotation mark decoration */}
              <div className="absolute top-4 left-4 text-8xl text-[var(--vintage-gold)] opacity-20 display-font leading-none">
                "
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="var(--vintage-gold)">
                      <path d="M10 1l2.5 6.5L19 8l-5 4.5L15.5 19 10 15.5 4.5 19 6 12.5 1 8l6.5-.5L10 1z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg mb-6 text-[var(--vintage-dark)] italic leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="border-t-2 border-[var(--vintage-gold)] pt-4">
                  <p className="display-font text-xl text-[var(--vintage-dark)]">
                    {testimonial.name}
                  </p>
                  <p className="subtitle-font text-sm text-[var(--vintage-brown)] tracking-wider uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-4 border-[var(--vintage-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
