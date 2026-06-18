import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useAuth } from "../store/authStore";
import { useCart } from "../store/cartStore";
import { scrollToSection } from "../utils/scrollToSection";
import Logo from './Logo.jsx';

const navLinks = [
  { name: "Inicio", to: "/" },
  { name: "Destacados", to: "/#destacados" },
  { name: "Contacto", to: "/#contacto" },
  { name: "Nosotros", to: "/#nosotros" },
  { name: "Testimonios", to: "/#testimonios" },
  { name: "Catálogo", to: "/catalogo" },
];

const linkClassName =
  "relative subtitle-font tracking-wider text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors duration-300 group";

function NavItem({ to, children, onNavigate }) {
  const location = useLocation();

  function handleClick(event) {
    onNavigate?.();

    const hashIndex = to.indexOf("#");
    if (hashIndex === -1) return;

    const sectionId = to.slice(hashIndex + 1);
    const path = to.slice(0, hashIndex) || "/";

    if (location.pathname === path) {
      event.preventDefault();
      scrollToSection(sectionId);
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  }

  return (
    <Link to={to} onClick={handleClick} className={linkClassName}>
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--vintage-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const { total } = useCart();

  const dataCompany = {
    name: "EL MUSIQUERO",
    since: "DESDE 1987",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--vintage-dark)] shadow-2xl py-4"
          : "bg-[var(--vintage-dark)]/95 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Logo dataCompany={dataCompany} />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItem key={link.name} to={link.to}>
                {link.name}
              </NavItem>
            ))}
          </div>

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

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--vintage-cream)] p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 mt-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <NavItem
                key={link.name}
                to={link.to}
                onNavigate={closeMobileMenu}
              >
                <span className="py-2 border-b border-[var(--vintage-gold)]/20 block">
                  {link.name}
                </span>
              </NavItem>
            ))}
            <Link
              to={isLoggedIn ? "/profile" : "/login"}
              className="subtitle-font tracking-wider text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors duration-300 py-2"
              onClick={closeMobileMenu}
            >
              {isLoggedIn ? "PERFIL" : "INGRESAR"}
            </Link>
            <Link
              to={isLoggedIn ? "/logout" : "/register"}
              className="mt-2 px-6 py-3 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-all duration-300 text-center"
              onClick={closeMobileMenu}
            >
              {isLoggedIn ? "CERRAR SESIÓN" : "REGISTRO"}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--vintage-gold)] to-transparent" />
    </nav>
  );
}
