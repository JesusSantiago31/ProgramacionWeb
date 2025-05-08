// Importar modulos de React
import React from "react";

// Funcion del componente
const MiComponente = () =>{

    const usuario={
        nombre : "Jesus",
        apellido : "Santiago",
        web : "jesusweb.mx"
};
    return (
        <div className="mi-componente">
        
        <h2>Componente creado</h2>
        <p> Este es mi primer componente</p>
        <h3>Datos de usuario</h3>
        <ul>
            <li>Nombre: <strong>{usuario.nombre}</strong></li>
            <li>Apellido: <strong>{usuario.apellido}</strong></li>
            <li>Web: {usuario.web}</li>
        </ul>
        </div>
    );
}

//Exportacion del componente
export default MiComponente;