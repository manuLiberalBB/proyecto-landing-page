import { Link } from 'react-router';
import { AuthLayout } from '../components/AuthLayout';

export default function NotFoundPage() {
  return (
    <AuthLayout>
      <div className="text-center space-y-6">
        <p className="display-font text-7xl text-[var(--vintage-red)] leading-none">404</p>

        <p className="text-lg text-[var(--vintage-brown)] leading-relaxed">
          Parece que te perdiste en el camino. La ruta que buscás no está en nuestro catálogo.
        </p>

        <Link
          to="/"
          className="inline-block w-full py-3 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-all duration-300 text-center"
        >
          VOLVER AL INICIO
        </Link>
      </div>
    </AuthLayout>
  );
}
