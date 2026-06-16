const API_BASE = import.meta.env.VITE_API_BASE;

export async function getProducts() {
  const response = await fetch(`${API_BASE}/api/productos`);
  const data = await response.json();
  return data;
}