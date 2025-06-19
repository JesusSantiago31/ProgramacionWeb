import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchUltimosMovimientos } from "../js/dashboard";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [movimientos, setMovimientos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    const cargarMovimientos = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUltimosMovimientos(token);
        setMovimientos(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    cargarMovimientos();
  }, [token]);

  if (!token)
    return (
      <p className="text-red-600">
        Debe iniciar sesión para ver el dashboard.
      </p>
    );

  return (
    <>
      <h1 className="text-sky-800 text-3xl mt-3 font-bold">
        Últimos 6 movimientos
      </h1>

      {loading && <p className="text-center text-sky-600">Cargando...</p>}
      {error && <p className="text-center text-red-600">Error: {error}</p>}

      <ul className="flex flex-col w-full h-full p-5 items-center gap-2">
        {movimientos.length === 0 && !loading && (
          <p className="text-gray-600">No hay movimientos recientes.</p>
        )}
        {movimientos.map((mov) => (
          <Card
            key={mov._id}
            type={mov.type}
            color={mov.type.toLowerCase() === "ingreso" ? "sky" : "rose"}
            description={mov.description}
            amount={mov.amount}
            date={new Date(mov.date).toLocaleDateString()}
          />
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
