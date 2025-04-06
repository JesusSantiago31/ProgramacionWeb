import React from "react";

function LinkForm({ title, setTitle, link, setLink, category, setCategory, handleAdd }) {
  return (
    <form onSubmit={handleAdd} className="form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default LinkForm;
