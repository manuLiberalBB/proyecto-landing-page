import { Link } from 'react-router';

export function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[var(--vintage-cream)] flex flex-col">
      <header className="bg-[var(--vintage-dark)] py-6 border-b border-[var(--vintage-gold)]/30">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="group flex items-center gap-3 w-fit">
            <div className="w-12 h-12 border-2 border-[var(--vintage-gold)] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
              <span className="text-2xl transform group-hover:-rotate-45 transition-transform duration-500">
                🎸
              </span>
            </div>
            <div>
              <h1 className="display-font text-3xl text-[var(--vintage-cream)] leading-none group-hover:text-[var(--vintage-gold)] transition-colors duration-300">
                EL MUSIQUERO
              </h1>
              <p className="text-xs subtitle-font tracking-widest text-[var(--vintage-gold)]">
                DESDE 1987
              </p>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16 noise-texture">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="text-center mb-10">
            <h2 className="display-font text-5xl text-[var(--vintage-dark)] mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="subtitle-font tracking-wider text-[var(--vintage-brown)]">
                {subtitle}
              </p>
            )}
          </div>

          <div className="bg-white border-2 border-[var(--vintage-gold)]/40 shadow-xl p-8 md:p-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
