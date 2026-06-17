const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000';

export async function registerUser({ name, email, password }) {
  const res = await fetch(`${API_BASE}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
    credentials: 'include',
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error ?? 'Error al registrarse');
  }
  return data;
}

export async function loginUser({ email, password }) {
  const res = await fetch(`${API_BASE}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error ?? 'Error al loguearse');
  }

  return data;
}

export async function getProfile() {
  const res = await fetch(`${API_BASE}/api/profile`, {
    credentials: 'include',
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error ?? 'No se pudo obtener el perfil');
  }

  return data;
}

export async function verifyAuthToken() {
  const res = await fetch(`${API_BASE}/api/verify-auth-token`, {
    credentials: 'include',
    method: 'GET',
  });

  if (res.status === 401) {
    return null;
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.error ?? 'Error al verificar la sesión');
  }

  return data;
}

export async function logoutUser() {
  const res = await fetch(`${API_BASE}/api/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('No se pudo cerrar la sesión');
  }
}
