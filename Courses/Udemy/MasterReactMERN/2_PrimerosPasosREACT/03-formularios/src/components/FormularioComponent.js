import React from 'react'

export const FormularioComponent = () => {
  return (
    <div>
        <h1>Formularios con REACT</h1>

        <form>
            <input type="text" placeholder='Nombre'></input>
            <input type="text" placeholder='Apellido'></input>
            <select>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>
            <input type='submit' value="enviar"></input>
        </form>
    </div>
  )
}
