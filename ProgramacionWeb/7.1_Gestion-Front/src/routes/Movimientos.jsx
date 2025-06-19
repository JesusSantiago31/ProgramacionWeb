import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Card from "../components/Card";
import {
  fetchCategories,
  fetchAllTransactions,
  fetchIncomeTransactions,
  fetchOutflowTransactions,
  fetchTransactionsByCategory,
  fetchTransactionsByDate,
  addTransaction,
  getToken,
} from "../js/movimientos";

const Movimientos = () => {
  const token = getToken();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Ingreso");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [sortConfig, setSortConfig] = useState({ field: "", direction: "asc" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const esFechaISO = (str) => /^\d{4}-\d{2}-\d{2}$/.test(str);

  const parseFilters = (input) => {
    const filters = { tipo: "", categoria: "", fecha: "", descripcion: "" };
    const terms = input.trim().split(/\s+/);
    const descTerms = [];

    for (const term of terms) {
      const lower = term.toLowerCase();

      if (lower === "ingreso" || lower === "egreso") {
        filters.tipo = term[0].toUpperCase() + term.slice(1).toLowerCase();
      } else if (esFechaISO(term)) {
        filters.fecha = term;
      } else {
        descTerms.push(term);
      }
    }

    const desc = descTerms.join(" ");
    const categoriaEncontrada = categories.find(
      (c) => c.name.toLowerCase() === desc.toLowerCase()
    );

    if (categoriaEncontrada) {
      filters.categoria = categoriaEncontrada._id;
    } else {
      filters.descripcion = desc;
    }

    return filters;
  };

  const cargarCategorias = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
      if (data.length > 0) setCategoryId(data[0]._id);
    } catch (err) {
      setError("Error cargando categorías: " + err.message);
    }
  };

  const cargarTransacciones = async () => {
    setLoading(true);
    setError(null);
    try {
      const { tipo, categoria, fecha, descripcion } = parseFilters(filterInput);
      let data = [];

      if (tipo === "Ingreso") {
        data = await fetchIncomeTransactions();
      } else if (tipo === "Egreso") {
        data = await fetchOutflowTransactions();
      } else {
        data = await fetchAllTransactions();
      }

      if (categoria) {
        const catData = await fetchTransactionsByCategory(categoria);
        data = catData;
      }

      if (fecha) {
        const fechaData = await fetchTransactionsByDate(fecha);
        data = fechaData;
      }

      if (descripcion.trim() !== "") {
        data = data.filter((t) =>
          t.description.toLowerCase().includes(descripcion.toLowerCase())
        );
      }

      setTransactions(data);
    } catch (err) {
      setError("Error cargando transacciones: " + err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) cargarCategorias();
  }, [token]);

  useEffect(() => {
    if (token && categories.length > 0) {
      cargarTransacciones();
    }
  }, [token, filterInput, categories]);

  const handleAgregar = async (e) => {
    e.preventDefault();
    if (!description.trim() || !amount || !categoryId) return;

    setLoading(true);
    setError(null);
    try {
      const nuevoMovimiento = await addTransaction({
        description,
        amount: Number(amount),
        type,
        category: categoryId,
        date: new Date().toISOString(),
      });
      setTransactions((prev) => [...prev, nuevoMovimiento]);
      setDescription("");
      setAmount("");
      setType("Ingreso");
      if (categories.length > 0) setCategoryId(categories[0]._id);
    } catch (err) {
      setError("Error al agregar: " + err.message);
    }
    setLoading(false);
  };

  const toggleSort = (field) => {
    setSortConfig((prev) => ({
      field,
      direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const ordenarTransacciones = (lista) => {
    if (!sortConfig.field) return lista;

    return [...lista].sort((a, b) => {
      let valA = a[sortConfig.field];
      let valB = b[sortConfig.field];
      if (sortConfig.field === "date") {
        valA = new Date(valA).getTime();
        valB = new Date(valB).getTime();
      }
      return sortConfig.direction === "asc" ? valA - valB : valB - valA;
    });
  };

  const transaccionesFiltradas = ordenarTransacciones(transactions);

  if (!token)
    return (
      <p className="text-red-600 text-center mt-5">
        Debe iniciar sesión para ver y agregar movimientos.
      </p>
    );

  return (
    <section className="w-full p-4 max-w-4xl mx-auto">
      <form
        onSubmit={handleAgregar}
        className="bg-white shadow-md rounded-md text-center flex flex-col items-center px-6 py-6 mb-6 gap-5"
      >
        <h1 className="text-3xl font-semibold">Movimientos</h1>

        <div className="flex flex-col w-[320px] items-start">
          <label className="text-sky-600 mb-1 font-medium" htmlFor="description">
            Descripción:
          </label>
          <textarea
            id="description"
            rows={2}
            className="w-full border border-sky-400 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col w-[320px] items-start">
          <label className="text-slate-600 mb-1 font-medium" htmlFor="amount">
            Monto
          </label>
          <input
            id="amount"
            type="number"
            min="0"
            step="0.01"
            className="w-full bg-stone-50 border border-sky-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col w-[320px] items-start">
          <label htmlFor="type" className="font-medium">
            Tipo
          </label>
          <select
            id="type"
            className="w-full border border-sky-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Ingreso">Ingreso</option>
            <option value="Egreso">Egreso</option>
          </select>
        </div>

        <div className="flex flex-col w-[320px] items-start">
          <label htmlFor="category" className="font-medium">
            Categoría
          </label>
          <select
            id="category"
            className="w-full border border-sky-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end w-[320px]">
          <button
            disabled={loading}
            type="submit"
            className="bg-rose-400 text-white rounded-md px-5 py-2 hover:bg-rose-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Agregar
          </button>
        </div>
      </form>

      <div className="w-full mb-4 flex items-center gap-2 border border-slate-300 rounded px-2 py-1 max-w-4xl mx-auto">
        <Search className="text-slate-600" />
        <input
          type="text"
          placeholder="Buscar: texto libre | Ingreso | Egreso | Nombre de categoría | 2023-06-17"
          className="focus:outline-none flex-grow px-2 py-1"
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setFilterInput("")}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-3 py-1 rounded transition"
        >
          Limpiar
        </button>
      </div>

      {loading && <p className="text-center text-sky-600 font-medium">Cargando...</p>}
      {error && <p className="text-center text-red-600 font-medium">Error: {error}</p>}

      <ul className="flex flex-col w-full h-full p-4 items-center gap-3">
        {transaccionesFiltradas.length === 0 ? (
          <p className="text-gray-600">No hay movimientos que mostrar</p>
        ) : (
          transaccionesFiltradas.map((movimiento) => (
            <Card
              key={movimiento._id}
              type={movimiento.type}
              color={
                movimiento.type.toLowerCase() === "ingreso" ? "sky" : "rose"
              }
              description={movimiento.description}
              amount={movimiento.amount}
              date={new Date(movimiento.date).toLocaleDateString()}
            />
          ))
        )}
      </ul>
    </section>
  );
};

export default Movimientos;
