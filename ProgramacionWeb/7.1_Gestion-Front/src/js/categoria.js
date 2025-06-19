// src/api/categoriaService.js

const API_URL = "http://localhost:3000/category";


const getToken = () => localStorage.getItem("token");

const getHeaders = () => {
  const token = getToken();
  

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const fetchCategorias = async () => {
  const res = await fetch(API_URL, { headers: getHeaders() });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error("Error al cargar categorías:", errorData.message);
    throw new Error("Error al cargar categorías");
  }

  return await res.json();
};

export const crearCategoria = async (nombre) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ name: nombre }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error("Error al agregar categoría:", errorData.message);
    throw new Error("Error al agregar categoría");
  }

  return await res.json();
};
