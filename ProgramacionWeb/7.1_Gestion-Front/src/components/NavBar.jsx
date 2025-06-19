import React from "react";

const NavBar = ({ ruta, setRuta }) => {
  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Categorias", path: "/categorias" },
    { label: "Movimientos", path: "/movimientos" },
  ];

  return (
    <nav className="w-full px-6 py-3 bg-white shadow-md">
      <ul className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-8 text-lg font-medium select-none">
          {navItems.map(({ label, path }) => (
            <li
              key={path}
              className={`cursor-pointer transition-colors duration-300 ${
                ruta === path
                  ? "text-sky-600 border-b-2 border-sky-600"
                  : "text-slate-600 hover:text-sky-500"
              }`}
              onClick={() => setRuta(path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setRuta(path)}
              aria-current={ruta === path ? "page" : undefined}
            >
              {label}
            </li>
          ))}
        </div>

        <li
          className="cursor-pointer text-slate-600 hover:text-rose-500 text-lg font-semibold select-none transition-colors duration-300"
          onClick={()=>{
            localStorage.removeItem("token"); // Elimina el token
    setRuta("/"); // Redirige al login o ruta deseada
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setRuta("/login")}
        >
          Cerrar Sesión
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
