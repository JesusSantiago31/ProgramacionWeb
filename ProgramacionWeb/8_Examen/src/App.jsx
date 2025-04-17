import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import ReadBooks from './components/ReadBooks';
import Filters from './components/Filters';

export default function App() {
  const [editingBook, setEditingBook] = useState(null);  // Estado para manejar el libro a editar

  const clearEditing = () => setEditingBook(null);  // Función para limpiar el libro a editar

  return (
    <div className="container mx-auto p-4 bg-blue-100">
      <h1 className="text-3xl font-bold text-center mb-4">Gestión de Libros</h1>

      {/* Pasamos el libro a editar a BookForm */}
      <ReadBooks />
      <BookForm editingBook={editingBook} clearEditing={clearEditing} />
      <BookList setEditingBook={setEditingBook} />
    </div>
  );
}
