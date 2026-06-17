import { useState, useEffect } from "react";
import {Link} from "react-router";
import { useAuth } from "../store/authStore";
import { useCart } from "../store/cartStore";
import Logo from './Logo.jsx';

export default function Navbar() {
  // Estado
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const { total } = useCart();
  const dataCompany = {
    name: "EL MUSIQUERO",
    since: "DESDE 1987",
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Destacados", href: "#destacados" },
    { name: "Contacto", href: "#contacto" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Catálogo", href: "/catalogo" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[var(--vintage-dark)] shadow-2xl py-4'
          : 'bg-[var(--vintage-dark)]/95 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo dataCompany={dataCompany} />
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative subtitle-font tracking-wider text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--vintage-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <button className="relative p-2 text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m4-5a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--vintage-red)] text-[var(--vintage-cream)] text-xs flex items-center justify-center rounded-full">
                {total}
              </span>
            </button>
            <Link
              to={isLoggedIn ? "/profile" : "/login"}
              className="subtitle-font tracking-wider text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors duration-300"
            >
              {isLoggedIn ? "PERFIL" : "INGRESAR"}
            </Link>
            <Link
              to={isLoggedIn ? "/logout" : "/register"}
              className="px-6 py-2 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-all duration-300"
            >
              {isLoggedIn ? "CERRAR SESIÓN" : "REGISTRO"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--vintage-cream)] p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="subtitle-font tracking-wider text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors duration-300 py-2 border-b border-[var(--vintage-gold)]/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/login"
              className="subtitle-font tracking-wider text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              INGRESAR
            </Link>
            <Link
              to="/register"
              className="mt-2 px-6 py-3 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-all duration-300 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              REGISTRO
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--vintage-gold)] to-transparent"></div>
    </nav>
  );
}
