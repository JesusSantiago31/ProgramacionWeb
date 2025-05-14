import React, {useState} from 'react'

export const MiPrimerEstado = () => {
   /* let nombre = "Jesus SSC"
const cambiarNombre = e =>{
    nombre = "Paquito Hernandez"
}*/

const [nombre, setNombre] = useState("Jesus SSC");

const cambiarNombre = (e, nombreFijo) => {
    setNombre (nombreFijo);
    console.log(e.target);
}

  return (
    <div>
        <h3>Componente: Mi Primer Etsado</h3>
        <strong className={nombre.length < 4 ? 'red' : 'green'}>
            {nombre}
        </strong>
        &nbsp;&nbsp;
        <button onClick={e => cambiarNombre(e, "Fransisco")}>Cambiar Nombre po </button>
        &nbsp;&nbsp;
        <input type='text' onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'></input>
        {/*<input type='text' onKeyDown={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'></input>*/}
    </div>
  )
}
