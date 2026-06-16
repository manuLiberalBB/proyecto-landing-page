export default function AboutUs() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-[var(--vintage-cream)] relative overflow-hidden noise-texture">
      {/* Decorative musical staff lines */}
      <div className="absolute top-20 left-0 w-full opacity-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-full h-0.5 bg-[var(--vintage-dark)] mb-4"
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="mb-6">
              <div className="inline-block px-6 py-2 border-2 border-[var(--vintage-red)] bg-[var(--vintage-red)]/10 mb-4">
                <span className="subtitle-font tracking-widest uppercase text-[var(--vintage-red)]">
                  Nuestra Historia
                </span>
              </div>
              <h2 className="display-font text-6xl md:text-7xl text-[var(--vintage-dark)] mb-6">
                SOBRE NOSOTROS
              </h2>
              <div className="w-32 h-1 bg-[var(--vintage-gold)]"></div>
            </div>

            <div className="space-y-6 text-lg text-[var(--vintage-brown)] leading-relaxed">
              <p>
                Desde <strong className="text-[var(--vintage-red)]">1987</strong>, El Musiquero ha sido el corazón musical de la ciudad,
                conectando a músicos de todos los niveles con los instrumentos de sus sueños.
              </p>

              <p>
                Fundada por una familia de músicos apasionados, nuestra tienda nació del deseo de crear
                un espacio donde la calidad, el conocimiento y el amor por la música se unieran.
                Más que una tienda, somos una <strong className="text-[var(--vintage-red)]">comunidad</strong>.
              </p>

              <p>
                Con más de <strong className="text-[var(--vintage-red)]">35 años de experiencia</strong>,
                hemos ayudado a miles de músicos a encontrar su voz. Desde el principiante
                que compra su primera guitarra hasta el profesional que busca ese instrumento
                perfecto para grabar su álbum.
              </p>

              <div className="pt-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-[var(--vintage-gold)] pl-4">
                    <div className="display-font text-4xl text-[var(--vintage-red)]">10,000+</div>
                    <div className="subtitle-font text-sm tracking-wider text-[var(--vintage-brown)]">
                      CLIENTES FELICES
                    </div>
                  </div>
                  <div className="border-l-4 border-[var(--vintage-gold)] pl-4">
                    <div className="display-font text-4xl text-[var(--vintage-red)]">50+</div>
                    <div className="subtitle-font text-sm tracking-wider text-[var(--vintage-brown)]">
                      MARCAS OFICIALES
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider uppercase hover:bg-[var(--vintage-dark)] transition-colors duration-300">
                Nuestra Historia Completa
              </button>
              <button className="px-8 py-3 border-2 border-[var(--vintage-dark)] text-[var(--vintage-dark)] subtitle-font tracking-wider uppercase hover:bg-[var(--vintage-dark)] hover:text-[var(--vintage-cream)] transition-all duration-300">
                Visitanos
              </button>
            </div>
          </div>

          {/* Right side - Image collage */}
          <div className="relative">
            {/* Main image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[var(--vintage-gold)] transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              <div className="relative overflow-hidden border-4 border-[var(--vintage-dark)]">
                <img
                  src="https://images.unsplash.com/photo-1645336745172-28aab41f5c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Interior de El Musiquero"
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--vintage-dark)]/60 to-transparent"></div>
              </div>
            </div>


            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-[var(--vintage-gold)] opacity-30 rotate-12"></div>
            <div className="absolute -bottom-4 right-12 w-24 h-24 bg-[var(--vintage-brown)] opacity-10 rounded-full"></div>

            {/* Values */}

          </div>
        </div>
      </div>
    </section>
  );
}
