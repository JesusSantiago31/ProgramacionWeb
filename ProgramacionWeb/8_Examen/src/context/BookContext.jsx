// src/context/BookContext.jsx
import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage('books', []);
  const [editBookData, setEditBookData] = useState(null); 

  const addBook = (book) => {
    const newBook = {
      id: crypto.randomUUID(),
      ...book,
      read: false,
    };
    setBooks([...books, newBook]);
  };

  const editBook = (id, updatedBook) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );
  };
  

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const toggleRead = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  const startEdit = (book) => setEditBookData(book);     
  const clearEdit = () => setEditBookData(null);         
 // Función para actualizar un libro
  const updateBook = (id, updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === id ? { ...book, ...updatedBook } : book))
    );
  };
  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        editBook,
        deleteBook,
        toggleRead,
        editBookData,
        startEdit,
        clearEdit,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
