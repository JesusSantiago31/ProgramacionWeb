import { useBookContext } from '../context/BookContext';

export default function ReadBooks() {
  const { books, markAsRead } = useBookContext();

  // Filtrar libros leídos
  const readBooks = books.filter(book => book.read);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-green-50 shadow-md rounded-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-center text-green-700">Libros Leídos</h2>

      {/* Si no hay libros leídos, mostrar mensaje */}
      {readBooks.length === 0 ? (
        <p className="text-center text-gray-600">No has marcado ningún libro como leído.</p>
      ) : (
        <ul className="space-y-4">
          {readBooks.map((book) => (
            <li
              key={book.id}
              className="flex justify-between items-center border p-3 rounded shadow-sm bg-white"
            >
              {/* Información básica del libro */}
              <div>
                <p><strong>Título:</strong> {book.title}</p>
                <p><strong>Autor:</strong> {book.author}</p>
              </div>

              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
