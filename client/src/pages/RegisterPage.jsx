import { useState, useId } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthLayout } from '../components/AuthLayout';
import { registerUser } from '../services/authService';
import { usePageMeta } from '../hooks/usePageMeta';

export default function RegisterPage() {
  usePageMeta('Registro | El Musiquero', { noindex: true });

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();

  async function handleSubmitRegister(e) {
    e.preventDefault();
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get(nameId);
    const email = formData.get(emailId);
    const password = formData.get(passwordId);
    const confirmPassword = formData.get(confirmPasswordId);

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    try {
      await registerUser({ name, email, password });
      navigate('/login');
    } catch (err) {
      setError(err.message ?? 'No se pudo completar el registro');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout title="REGISTRO" subtitle="Creá tu cuenta en El Musiquero">
      <form className="space-y-6" onSubmit={handleSubmitRegister}>
        {error && (
          <p
            role="alert"
            className="subtitle-font text-sm tracking-wider text-[var(--vintage-red)] bg-[var(--vintage-cream)] border border-[var(--vintage-red)]/40 px-4 py-3"
          >
            {error}
          </p>
        )}

        <div>
          <label
            htmlFor="name"
            className="block subtitle-font text-sm tracking-wider text-[var(--vintage-brown)] mb-2"
          >
            Nombre
          </label>
          <input
            id="name"
            name={nameId}
            type="text"
            autoComplete="name"
            required
            disabled={loading}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 border-2 border-[var(--vintage-gold)]/30 bg-[var(--vintage-cream)]/50 text-[var(--vintage-dark)] placeholder:text-[var(--vintage-brown)]/50 focus:border-[var(--vintage-gold)] focus:outline-none transition-colors disabled:opacity-60"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block subtitle-font text-sm tracking-wider text-[var(--vintage-brown)] mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name={emailId}
            type="email"
            autoComplete="email"
            required
            disabled={loading}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 border-2 border-[var(--vintage-gold)]/30 bg-[var(--vintage-cream)]/50 text-[var(--vintage-dark)] placeholder:text-[var(--vintage-brown)]/50 focus:border-[var(--vintage-gold)] focus:outline-none transition-colors disabled:opacity-60"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block subtitle-font text-sm tracking-wider text-[var(--vintage-brown)] mb-2"
          >
            Contraseña
          </label>
          <input
            id="password"
            name={passwordId}
            type="password"
            autoComplete="new-password"
            required
            disabled={loading}
            placeholder="••••••••"
            className="w-full px-4 py-3 border-2 border-[var(--vintage-gold)]/30 bg-[var(--vintage-cream)]/50 text-[var(--vintage-dark)] placeholder:text-[var(--vintage-brown)]/50 focus:border-[var(--vintage-gold)] focus:outline-none transition-colors disabled:opacity-60"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block subtitle-font text-sm tracking-wider text-[var(--vintage-brown)] mb-2"
          >
            Confirmar contraseña
          </label>
          <input
            id="confirmPassword"
            name={confirmPasswordId}
            type="password"
            autoComplete="new-password"
            required
            disabled={loading}
            placeholder="••••••••"
            className="w-full px-4 py-3 border-2 border-[var(--vintage-gold)]/30 bg-[var(--vintage-cream)]/50 text-[var(--vintage-dark)] placeholder:text-[var(--vintage-brown)]/50 focus:border-[var(--vintage-gold)] focus:outline-none transition-colors disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'CREANDO CUENTA...' : 'CREAR CUENTA'}
        </button>
      </form>

      <p className="mt-6 text-center text-[var(--vintage-brown)]">
        ¿Ya tenés cuenta?{' '}
        <Link
          to="/login"
          className="subtitle-font tracking-wider text-[var(--vintage-red)] hover:text-[var(--vintage-gold)] transition-colors"
        >
          Iniciá sesión
        </Link>
      </p>
    </AuthLayout>
  );
}
