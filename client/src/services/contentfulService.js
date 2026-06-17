const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000';

export async function getProducts() {
  const response = await fetch(`${API_BASE}/api/productos`);
  const data = await response.json();
  return data;
}