import { useState, useEffect } from 'react';
import { useBookContext } from '../context/BookContext';

export default function BookForm({ editingBook, clearEditing }) {
  const { addBook, updateBook } = useBookContext();  // `updateBook` es la función para editar un libro

  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    year: ''
  });

  // Si se pasa un libro para editar, se actualiza el formulario
  useEffect(() => {
    if (editingBook) {
      setForm({
        title: editingBook.title,
        author: editingBook.author,
        genre: editingBook.genre,
        year: editingBook.year
      });
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.genre || !form.year) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (editingBook) {
      // Si estamos editando, actualizamos el libro
      updateBook(editingBook.id, form);
      clearEditing();  // Limpiamos el libro a editar
    } else {
      // Si no estamos editando, agregamos un nuevo libro
      addBook(form);
    }

    setForm({ title: '', author: '', genre: '', year: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-rose-50 shadow-md rounded-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-slate-700 text-center">
        {editingBook ? 'Editar Libro' : 'Agregar Nuevo Libro'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={form.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="genre"
          placeholder="Género"
          value={form.genre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="year"
          placeholder="Año de publicación"
          value={form.year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded"
          >
            {editingBook ? 'Guardar Cambios' : 'Agregar Libro'}
          </button>

          {editingBook && (
            <button
              type="button"
              onClick={clearEditing}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
