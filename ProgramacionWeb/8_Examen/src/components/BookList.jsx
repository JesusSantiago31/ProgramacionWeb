// src/components/BookList.jsx
import { useBookContext } from '../context/BookContext';
import { useState } from 'react';

export default function BookList({ setEditingBook }) {
  const { books, deleteBook, toggleRead } = useBookContext();
  const [filter, setFilter] = useState({ title: '', author: '', genre: '' });

  // Función para aplicar los filtros de búsqueda
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    book.author.toLowerCase().includes(filter.author.toLowerCase()) &&
    book.genre.toLowerCase().includes(filter.genre.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-center"> Lista de Libros</h2>

      {/* Filtros por título, autor y género */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Filtrar por título"
          value={filter.title}
          onChange={(e) => setFilter({ ...filter, title: e.target.value })}
          className="w-full md:w-1/3 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Filtrar por autor"
          value={filter.author}
          onChange={(e) => setFilter({ ...filter, author: e.target.value })}
          className="w-full md:w-1/3 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Filtrar por género"
          value={filter.genre}
          onChange={(e) => setFilter({ ...filter, genre: e.target.value })}
          className="w-full md:w-1/3 p-2 border rounded"
        />
      </div>

      {/* Si no hay libros, mostrar mensaje */}
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-600">No hay libros registrados o coincidentes.</p>
      ) : (
        // Mostrar lista de libros filtrados
        <ul className="space-y-4">
          {filteredBooks.map((book) => (
            <li
              key={book.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center border p-3 rounded shadow-sm"
            >
              {/* Información del libro */}
              <div>
                <p><strong>Título:</strong> {book.title}</p>
                <p><strong>Autor:</strong> {book.author}</p>
                <p><strong>Género:</strong> {book.genre}</p>
                <p><strong>Año:</strong> {book.year}</p>
                <p className="mt-1">
                  <span className={`px-2 py-1 rounded text-white text-sm ${book.read ? 'bg-green-600' : 'bg-red-500'}`}>
                    {book.read ? 'Leído' : 'No leído'}
                  </span>
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                <button
                  onClick={() => setEditingBook(book)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => toggleRead(book.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                  {book.read ? 'Marcar como no leído' : 'Marcar como leído'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
