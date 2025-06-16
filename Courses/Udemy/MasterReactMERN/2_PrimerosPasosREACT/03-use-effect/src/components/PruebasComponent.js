import React, { useEffect, useState } from 'react';
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Jesus");
  const [fecha, setFecha] = useState("01-01-1998");
  const [contador, setC] = useState(0);

  const moodUsuario = e => {
    setUsuario(e.target.value);
  };

  const cambiarFecha = () => {
    setFecha(new Date().toLocaleDateString());
  };

  useEffect(() => {
    console.log("Has cargado el componente PruebasComponent");
  }, []);

  useEffect(() => {
    setC(contador + 1);
    console.log("Has modificado el usuario " + contador);
  }, [usuario, fecha]);

  return (
    <div>
      <h1>El efecto - useEffect</h1>
      <hr />
      <strong>{usuario}</strong>
      <br />
      <strong>{fecha}</strong>

      <p>
        <input type="text" onChange={moodUsuario} placeholder='Coloca Nombre' />
      </p>
      
      <strong className='label'>{usuario}</strong>
      
      <button onClick={cambiarFecha}>Actualizar fecha</button>

      {contador == "Jesus" && <AvisoComponent />}
    </div>
  );
};
