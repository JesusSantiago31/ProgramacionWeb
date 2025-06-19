const API_BASE_URL = "http://localhost:3000"; // Ajusta según tu API

export async function fetchUltimosMovimientos(token) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch(`${API_BASE_URL}/transaction`, { headers });
  if (!res.ok) throw new Error("Error cargando movimientos");

  const data = await res.json();
  // Ordenar desc por fecha y tomar 6 primeros
  return data
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);
}
