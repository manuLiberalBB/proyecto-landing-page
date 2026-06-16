export default function Hero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture pt-20">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1685603084426-2fdb03be0931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Guitar background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--vintage-cream)]/80 via-[var(--vintage-cream)]/90 to-[var(--vintage-cream)]"></div>
        </div>
  
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[var(--vintage-gold)] opacity-30 rotate-12 animate-fade-in delay-500"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-4 border-[var(--vintage-red)] opacity-20 -rotate-6 animate-fade-in delay-300"></div>
  
        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in-up opacity-0">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-[var(--vintage-red)] bg-[var(--vintage-red)]/10">
              <span className="subtitle-font tracking-widest uppercase text-[var(--vintage-red)]">Desde 1987</span>
            </div>
          </div>
  
          <h1 className="display-font text-[clamp(4rem,12vw,10rem)] leading-[0.9] text-[var(--vintage-dark)] mb-6 animate-slide-in-left opacity-0 delay-100">
            EL MUSIQUERO
          </h1>
  
          <div className="mb-8 animate-slide-in-right opacity-0 delay-200">
            <p className="text-2xl md:text-3xl text-[var(--vintage-brown)] italic max-w-2xl mx-auto">
              Tu destino para instrumentos musicales de calidad y pasión por la música
            </p>
          </div>
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 delay-400">
            <button className="group relative px-10 py-4 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Explorar Catálogo</span>
              <div className="absolute inset-0 bg-[var(--vintage-dark)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explorar Catálogo</span>
            </button>
  
            <button className="px-10 py-4 border-2 border-[var(--vintage-dark)] text-[var(--vintage-dark)] subtitle-font tracking-wider uppercase hover:bg-[var(--vintage-dark)] hover:text-[var(--vintage-cream)] transition-all duration-300">
              Contáctanos
            </button>
          </div>
  
        </div>
  
        {/* Vinyl record decorative element */}
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 animate-scale-in delay-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="var(--vintage-dark)" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="var(--vintage-gold)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="var(--vintage-gold)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="var(--vintage-gold)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="8" fill="var(--vintage-cream)" />
          </svg>
        </div>
      </section>
    );
  }
  