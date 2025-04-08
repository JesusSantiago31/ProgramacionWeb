import React, { useState } from "react";
import "./index.css";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import CategoryFilter from "./components/CategoryFilter";
import useLocalStorage from "./components/hooks/useLocalStorage";

function App() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
//  const [category, setCategory] = useState("");
const [category, setCategory] = useLocalStorage("categorias");
  
  const [filter, setFilter] = useState("all");
  //const [links, setLinks] = useState([]);
  const [links, setLinks] = useLocalStorage("urls",[]);
  

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title || !link || !category) return;
    setLinks([
      ...links,
      { id: Date.now(), title, url: link, category }
    ]);
    setTitle("");
    setLink("");
    setCategory("");
  };

  const handleDelete = (id) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    alert("Link copiado al portapapeles");
  };

  const filteredLinks =
    filter === "all" ? links : links.filter((l) => l.category === filter);

  const uniqueCategories = [...new Set(links.map((l) => l.category))];

  return (
    <div className="container">
      <h1>Link Saver</h1>

      <LinkForm
        title={title}
        setTitle={setTitle}
        link={link}
        setLink={setLink}
        category={category}
        setCategory={setCategory}
        handleAdd={handleAdd}
      />

      {uniqueCategories.length > 0 && (
        <CategoryFilter
          categories={uniqueCategories}
          filter={filter}
          setFilter={setFilter}
        />
      )}

      <LinkList
        links={filteredLinks}
        handleCopy={handleCopy}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
