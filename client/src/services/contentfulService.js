const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000';

export async function getProducts(contentType) {
  const response = await fetch(`${API_BASE}/api/productos?contentType=${contentType}`);
  const data = await response.json();
  return data;
}