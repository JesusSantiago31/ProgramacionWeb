import { Blocks } from "lucide-react";
import React, { useEffect, useState } from "react";
import { fetchCategorias, crearCategoria } from "../js/categoria";

export const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      cargarCategorias();
    }
  }, [token]);

  const cargarCategorias = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCategorias(token);
      setCategorias(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const agregarCategoria = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const nuevaCategoria = await crearCategoria(nombre, token);
      setCategorias((prev) => [...prev, nuevaCategoria]);
      setNombre("");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (!token)
    return (
      <p className="text-red-600 text-center mt-5">
        Debe iniciar sesión para ver y agregar categorías.
      </p>
    );

  return (
    <section className="w-full h-full p-6 max-w-3xl mx-auto">
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={agregarCategoria}
      >
        <h1 className="text-3xl flex gap-3 items-center font-semibold text-slate-800">
          Categorías <Blocks size={28} className="text-sky-600" />
        </h1>

        <div className="flex flex-col w-full">
          <label
            htmlFor="categoriaNombre"
            className="mb-1 font-semibold text-slate-700"
          >
            Nombre:
          </label>
          <input
            id="categoriaNombre"
            type="text"
            placeholder="Gastos de casa..."
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border-2 border-sky-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-sky-600 hover:bg-sky-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-md font-semibold transition"
          >
            Agregar
          </button>
        </div>
      </form>

      {loading && (
        <p className="mt-4 text-center text-sky-600 font-medium">Cargando...</p>
      )}
      {error && (
        <p className="mt-4 text-center text-red-600 font-medium">Error: {error}</p>
      )}

      <ul className="mt-6 max-w-md mx-auto space-y-3">
        {categorias.map((categoria) => (
          <li
            key={categoria._id}
            className="bg-white rounded-md shadow-md px-4 py-3 text-lg font-bold text-slate-700 hover:scale-105 transform transition duration-300 cursor-default select-none"
          >
            {categoria.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
