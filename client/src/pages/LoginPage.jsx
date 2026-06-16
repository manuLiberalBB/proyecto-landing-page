import { useState, useId } from "react";
import { Link, useNavigate } from "react-router";
import { AuthLayout } from "../components/AuthLayout";
import { loginUser } from "../services/authService";
import { useAuth } from "../store/authStore";
import { usePageMeta } from "../hooks/usePageMeta";

export default function LoginPage() {
  usePageMeta('Iniciar sesión | El Musiquero', { noindex: true });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { checkAuth } = useAuth();
  const emailId = useId();
  const passwordId = useId();
  
  async function handleSubmitLogin(e) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get(emailId);
    const password = formData.get(passwordId);

    setLoading(true);
    try {
      await loginUser({ email, password });
      // Si no rompe
      await checkAuth();
      navigate("/profile");
    } catch (err) {
      setError(err.message ?? "No se pudo completar el login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="INICIAR SESIÓN"
      subtitle="Accedé a tu cuenta de El Musiquero"
    >
      <form className="space-y-6" onSubmit={handleSubmitLogin}>
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
            className="w-full px-4 py-3 border-2 border-[var(--vintage-gold)]/30 bg-[var(--vintage-cream)]/50 text-[var(--vintage-dark)] placeholder:text-[var(--vintage-brown)]/50 focus:border-[var(--vintage-gold)] focus:outline-none transition-colors"
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
            autoComplete="current-password"
            required
            disabled={loading}
            placeholder="••••••••"
            className="w-full px-4 py-3 border-2 border-[var(--vintage-gold)]/30 bg-[var(--vintage-cream)]/50 text-[var(--vintage-dark)] placeholder:text-[var(--vintage-brown)]/50 focus:border-[var(--vintage-gold)] focus:outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font tracking-wider hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-all duration-300"
        >
          ENTRAR
        </button>
      </form>

      <p className="mt-6 text-center text-[var(--vintage-brown)]">
        ¿No tenés cuenta?{" "}
        <Link
          to="/register"
          className="subtitle-font tracking-wider text-[var(--vintage-red)] hover:text-[var(--vintage-gold)] transition-colors"
        >
          Registrate
        </Link>
      </p>
    </AuthLayout>
  );
}
