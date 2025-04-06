import React from "react";

function LinkList({ links, handleCopy, handleDelete }) {
  return (
    <ul className="link-list">
      {links.map((l) => (
        <li key={l.id} className="link-item">
          <div>
            <strong>{l.title}</strong>
            <br />
            <a href={l.url} target="_blank" rel="noopener noreferrer">
              {l.url}
            </a>
            <div className="category">Categoría: {l.category}</div>
          </div>
          <div className="actions">
            <button onClick={() => handleCopy(l.url)}>Copiar</button>
            <button onClick={() => handleDelete(l.id)}>Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
