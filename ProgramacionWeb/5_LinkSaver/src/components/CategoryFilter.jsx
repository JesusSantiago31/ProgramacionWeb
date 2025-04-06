import React from "react";

function CategoryFilter({ categories, filter, setFilter }) {
  return (
    <div className="category-buttons">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        Todas
      </button>
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => setFilter(cat)}
          className={filter === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
