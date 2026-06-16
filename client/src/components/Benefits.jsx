export default function Benefits() {
  const benefits = [
    {
      icon: '🚚',
      title: 'Envío Gratis',
      subtitle: 'A TODO EL PAÍS',
      description: 'Envíos bonificados sin costo en todas tus compras. Tu instrumento llega seguro a cualquier rincón del país.',
      color: 'var(--vintage-red)'
    },
    {
      icon: '💳',
      title: 'Financiación',
      subtitle: 'HASTA 12 CUOTAS',
      description: 'Precios justos y múltiples opciones de pago. Tarjetas de crédito, transferencias y planes de financiación flexibles.',
      color: 'var(--vintage-gold)'
    },
    {
      icon: '⭐',
      title: 'Calidad Premium',
      subtitle: 'CERTIFICADA',
      description: 'Instrumentos de las mejores marcas con garantía oficial. Cada producto pasa por riguroso control de calidad.',
      color: 'var(--vintage-brown)'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[var(--vintage-cream)] to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--vintage-red)] via-[var(--vintage-gold)] to-[var(--vintage-brown)]"></div>

      {/* Musical notes decoration */}
      <div className="absolute top-20 right-10 text-8xl opacity-5 animate-pulse">♪</div>
      <div className="absolute bottom-20 left-10 text-6xl opacity-5 animate-pulse" style={{ animationDelay: '0.5s' }}>♫</div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-[var(--vintage-red)] text-[var(--vintage-cream)]">
            <span className="subtitle-font tracking-widest uppercase">Por Qué Elegirnos</span>
          </div>
          <h2 className="display-font text-6xl md:text-8xl text-[var(--vintage-dark)] mb-6">
            TU MEJOR ELECCIÓN
          </h2>
          <p className="text-xl text-[var(--vintage-brown)] italic max-w-3xl mx-auto">
            Más de 35 años garantizando la mejor experiencia de compra para músicos de todo el país
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-white p-10 border-4 border-transparent hover:border-[var(--vintage-gold)] transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: benefit.color }}></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: benefit.color }}></div>

              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 w-24 h-24 mx-auto rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: benefit.color }}
                ></div>
                <div className="relative text-7xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-center">
                  {benefit.icon}
                </div>
              </div>

              {/* Subtitle badge */}
              <div className="mb-4 text-center">
                <div
                  className="inline-block px-4 py-1 text-xs subtitle-font tracking-widest text-white"
                  style={{ backgroundColor: benefit.color }}
                >
                  {benefit.subtitle}
                </div>
              </div>

              {/* Title */}
              <h3 className="display-font text-4xl text-center text-[var(--vintage-dark)] mb-4 group-hover:text-[var(--vintage-red)] transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Divider */}
              <div className="w-16 h-1 mx-auto mb-6 bg-[var(--vintage-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Description */}
              <p className="text-center text-[var(--vintage-brown)] leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover effect overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: benefit.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional trust badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { label: 'Años de Experiencia', value: '35+' },
            { label: 'Clientes Satisfechos', value: '10K+' },
            { label: 'Instrumentos en Stock', value: '500+' },
            { label: 'Marcas Oficiales', value: '50+' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white border-2 border-[var(--vintage-gold)]/30 hover:border-[var(--vintage-gold)] transition-colors duration-400"
            >
              <div className="display-font text-4xl text-[var(--vintage-red)] mb-2">
                {stat.value}
              </div>
              <div className="subtitle-font text-sm tracking-wider text-[var(--vintage-brown)] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
