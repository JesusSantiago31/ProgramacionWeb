import React from 'react'

export const SegundoComponente = () => {
    //const libros = ["Harry Potter", "Game of Trones", "Clean Code"];
    const libros = [];
  return (
    <div className='segundo-comp'>
        <p>Listado de Libros</p>
        {libros.length > 0 ?
            (<ul>
                {
                    libros.map((libro, indice) => {
                        return <li key={indice}>{libro}</li>;
                    })
                }
            </ul>
            )
            :(
                <p>No hay libros</p>
            )
        
        }
        
    </div>
  )
}
