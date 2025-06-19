const API_BASE_URL = "http://localhost:3000";

export const getToken = () => localStorage.getItem("token");

const getHeaders = () => {
  const token = getToken();
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
};

// Obtener todas las categorías
export async function fetchCategories() {
  const res = await fetch(`${API_BASE_URL}/category`, { headers: getHeaders() });
  if (!res.ok) throw new Error("Error cargando categorías");
  return res.json();
}

// Obtener TODOS los movimientos (sin filtro)
export async function fetchAllTransactions() {
  const res = await fetch(`${API_BASE_URL}/transaction`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Error cargando todos los movimientos");
  return res.json();
}

// Obtener movimientos por categoría
export async function fetchTransactionsByCategory(categoryId) {
  const res = await fetch(`${API_BASE_URL}/transaction/category/${categoryId}`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Error cargando movimientos por categoría");
  return res.json();
}

// Obtener movimientos por fecha (formato YYYY-MM-DD)
export async function fetchTransactionsByDate(date) {
  const res = await fetch(`${API_BASE_URL}/transaction/date/${date}`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Error cargando movimientos por fecha");
  return res.json();
}

// Obtener solo movimientos tipo Ingreso
export async function fetchIncomeTransactions() {
  const res = await fetch(`${API_BASE_URL}/transaction/income`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Error cargando ingresos");
  return res.json();
}

// Obtener solo movimientos tipo Egreso
export async function fetchOutflowTransactions() {
  const res = await fetch(`${API_BASE_URL}/transaction/outcome`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Error cargando egresos");
  return res.json();
}

// Agregar un nuevo movimiento
export async function addTransaction(transaction) {
  const res = await fetch(`${API_BASE_URL}/transaction`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(transaction),
  });
  if (!res.ok) throw new Error("Error al agregar movimiento");
  return res.json();
}
