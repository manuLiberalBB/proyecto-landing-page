export default function Categories() {
  const categories = [
    {
      name: 'Guitarras',
      icon: '🎸',
      description: 'Acústicas, eléctricas y bajos',
      color: 'var(--vintage-red)'
    },
    {
      name: 'Pianos',
      icon: '🎹',
      description: 'Digitales y acústicos',
      color: 'var(--vintage-gold)'
    },
    {
      name: 'Batería',
      icon: '🥁',
      description: 'Sets completos y accesorios',
      color: 'var(--vintage-brown)'
    },
    {
      name: 'Vientos',
      icon: '🎺',
      description: 'Saxofones, trompetas y más',
      color: 'var(--vintage-red)'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[var(--vintage-dark)] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--vintage-gold)] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--vintage-gold)] to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-font text-6xl md:text-8xl text-[var(--vintage-cream)] mb-4">
            CATEGORÍAS
          </h2>
          <div className="w-32 h-1 bg-[var(--vintage-gold)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative bg-[var(--vintage-cream)] p-8 cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Hover effect background */}
              <div
                className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                style={{ backgroundColor: category.color }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="display-font text-3xl mb-2 text-[var(--vintage-dark)] group-hover:text-[var(--vintage-cream)] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-[var(--vintage-brown)] group-hover:text-[var(--vintage-cream)]/90 transition-colors duration-300">
                  {category.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[var(--vintage-gold)] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[var(--vintage-gold)] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
