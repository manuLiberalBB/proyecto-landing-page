import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthLayout } from '../components/AuthLayout';
import { getProfile } from '../services/authService';
import { useAuth } from '../store/authStore';
import { usePageMeta } from '../hooks/usePageMeta';

function ProfileField({ label, value }) {
  return (
    <div className="border-b border-[var(--vintage-gold)]/20 pb-4 last:border-0 last:pb-0">
      <dt className="subtitle-font text-xs tracking-widest text-[var(--vintage-brown)] uppercase mb-1">
        {label}
      </dt>
      <dd className="text-lg text-[var(--vintage-dark)]">{value}</dd>
    </div>
  );
}

export default function ProfilePage() {
  usePageMeta('Mi perfil | El Musiquero', { noindex: true });

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { logOut } = useAuth();
  useEffect(() => {
    getProfile()
      .then(setUser)
      .catch((err) => setError(err.message ?? 'No se pudo cargar el perfil'))
      .finally(() => setLoading(false));
  }, []);

  async function handleLogout() {
    await logOut();
    navigate('/login');
  }

  return (
    <AuthLayout title="MI PERFIL" subtitle="Tu cuenta en El Musiquero">
      {loading && (
        <p className="text-center subtitle-font tracking-wider text-[var(--vintage-brown)]">
          Cargando perfil...
        </p>
      )}

      {error && (
        <p
          role="alert"
          className="subtitle-font text-sm tracking-wider text-[var(--vintage-red)] text-center"
        >
          {error}
        </p>
      )}

      {user && (
        <div className="space-y-6">
          <div className="w-20 h-20 mx-auto border-2 border-[var(--vintage-gold)] flex items-center justify-center bg-[var(--vintage-cream)] rounded-full">
            <span className="display-font text-3xl text-[var(--vintage-red)]">
              {user.name?.charAt(0)?.toUpperCase() ?? '?'}
            </span>
          </div>

          <dl className="space-y-4">
            <ProfileField label="Nombre" value={user.name} />
            <ProfileField label="Email" value={user.email} />
            <ProfileField label="ID de cuenta" value={String(user.id)} />
          </dl>

          <Link
            to="/ya-eres-admin"
            className="block w-full py-3 text-center border-2 border-[var(--vintage-gold)] text-[var(--vintage-dark)] subtitle-font tracking-wider hover:bg-[var(--vintage-gold)]/20 transition-all duration-300"
          >
            PANEL ADMIN
          </Link>

          <Link
            to="/"
            className="block w-full py-3 text-center subtitle-font tracking-wider text-[var(--vintage-brown)] hover:text-[var(--vintage-gold)] transition-colors"
          >
            Volver al inicio
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full py-3 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-all duration-300"
          >
            CERRAR SESIÓN
          </button>
        </div>
      )}
    </AuthLayout>
  );
}
