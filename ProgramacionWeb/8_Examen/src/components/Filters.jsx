import React from 'react';

export default function Filters({ filter, setFilter }) {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-purple-50 shadow-md rounded-md mb-6">
      <h2 className="text-lg font-semibold mb-4 text-center text-purple"> Filtrar Libros</h2>

      {/* Campos de filtro controlados */}
      <div className="flex flex-col md:flex-row gap-2">
        {/* Filtro por título */}
        <input
          type="text"
          placeholder="Filtrar por título"
          value={filter.title}
          onChange={(e) => setFilter({ ...filter, title: e.target.value })}
          className="w-full md:w-1/3 p-2 border rounded"
        />

        {/* Filtro por autor */}
        <input
          type="text"
          placeholder="Filtrar por autor"
          value={filter.author}
          onChange={(e) => setFilter({ ...filter, author: e.target.value })}
          className="w-full md:w-1/3 p-2 border rounded"
        />

        {/* Filtro por género */}
        <input
          type="text"
          placeholder="Filtrar por género"
          value={filter.genre}
          onChange={(e) => setFilter({ ...filter, genre: e.target.value })}
          className="w-full md:w-1/3 p-2 border rounded"
        />
      </div>
    </div>
  );
}
