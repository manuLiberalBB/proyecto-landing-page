import { API_BASE } from '../config/api.js';

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

export async function loginUser({email, password }) {
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

  // const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.log("Error al verificar el token", res.status);
    return false;
  }
  console.log("Token verificado correctamente");
  return true;
}
